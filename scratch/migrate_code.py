import os
import re

src_dir = "/Volumes/SSD/SLFFA-WEB 02/SLFFA WEB/src"

# 1. Update MemberLogos.jsx separately
member_logos_path = os.path.join(src_dir, "components/MemberLogos.jsx")
if os.path.exists(member_logos_path):
    print("Migrating MemberLogos.jsx...")
    with open(member_logos_path, "r", encoding="utf-8") as f:
        content = f.read()
    
    # Replace import.meta.glob lines with static import
    old_glob_block = """// Dynamically import all logos from the extracted_images folder
const logoModules = import.meta.glob('../../images/extracted_images/*.{png,jpg,jpeg,jfif,PNG}', { eager: true });

// Filter out macOS metadata files (those starting with '._') and map to their default URL
const logoUrls = Object.keys(logoModules)
  .filter((key) => {
    const filename = key.split('/').pop();
    return filename && !filename.startsWith('._');
  })
  .sort((a, b) => {
    const numA = parseInt(a.match(/image_(\d+)/)?.[1] || '0', 10);
    const numB = parseInt(b.match(/image_(\d+)/)?.[1] || '0', 10);
    return numA - numB;
  })
  .map((key) => logoModules[key].default || logoModules[key]);"""

    new_glob_block = "import { logoUrls } from '../data/extractedLogos';"
    
    if old_glob_block in content:
        content = content.replace(old_glob_block, new_glob_block)
    else:
        # Fallback if whitespace differs
        content = re.sub(r'const logoModules = import\.meta\.glob.*?\n\s*\.map\(.*?\);', new_glob_block, content, flags=re.DOTALL)
        content = re.sub(r'// Dynamically import all logos.*?\nconst logoUrls = Object\.keys\(logoModules\).*?\n\s*\.map\(.*?\);', new_glob_block, content, flags=re.DOTALL)

    with open(member_logos_path, "w", encoding="utf-8") as f:
        f.write(content)

# 2. Function to process general file content
def migrate_file(file_path):
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()
    
    modified = False
    
    # Skip processing layout.js or page.js in app/
    rel_path = os.path.relpath(file_path, src_dir)
    if rel_path.startswith("app/") or rel_path.startswith("app\\"):
        return
        
    # Skip assets
    if rel_path.startswith("assets/") or rel_path.startswith("assets\\"):
        return
        
    # Skip CSS
    if file_path.endswith(".css"):
        return

    # Process image imports: import imgName from '../../images/image.png'
    # Format: import name from '...images/path.png'
    img_import_pattern = r"import\s+(\w+)\s+from\s+['\"](?:\.\./)+images/([^'\"]+)['\"];?"
    
    def repl_img(match):
        nonlocal modified
        modified = True
        var_name = match.group(1)
        img_path = match.group(2)
        return f"const {var_name} = '/images/{img_path}';"
        
    content = re.sub(img_import_pattern, repl_img, content)

    # Replace react-router-dom imports
    # Replace: import { Link, useLocation } from 'react-router-dom';
    # With: import Link from 'next/link';\nimport { usePathname } from 'next/navigation';
    router_import_pattern_1 = r"import\s+\{\s*Link\s*,\s*useLocation\s*\}\s*from\s*['\"]react-router-dom['\"];?"
    if re.search(router_import_pattern_1, content):
        content = re.sub(router_import_pattern_1, "import Link from 'next/link';\nimport { usePathname } from 'next/navigation';", content)
        modified = True
        
    # Replace: import { Link } from 'react-router-dom';
    router_import_pattern_2 = r"import\s+\{\s*Link\s*\}\s*from\s*['\"]react-router-dom['\"];?"
    if re.search(router_import_pattern_2, content):
        content = re.sub(router_import_pattern_2, "import Link from 'next/link';", content)
        modified = True
        
    # Replace: import { Link, useNavigate } from 'react-router-dom';
    router_import_pattern_3 = r"import\s+\{\s*Link\s*,\s*useNavigate\s*\}\s*from\s*['\"]react-router-dom['\"];?"
    if re.search(router_import_pattern_3, content):
        content = re.sub(router_import_pattern_3, "import Link from 'next/link';\nimport { useRouter } from 'next/navigation';", content)
        modified = True
        
    # Replace: import { useLocation } from 'react-router-dom';
    router_import_pattern_4 = r"import\s+\{\s*useLocation\s*\}\s*from\s*['\"]react-router-dom['\"];?"
    if re.search(router_import_pattern_4, content):
        content = re.sub(router_import_pattern_4, "import { usePathname } from 'next/navigation';", content)
        modified = True
        
    # Replace: import { HashRouter ... } from 'react-router-dom'; in App.jsx (though App.jsx is not strictly used by next, we clean it up anyway)
    # router_import_pattern_5
    
    # Replace useNavigate instances:
    # useNavigate() -> useRouter()
    # const navigate = useNavigate(); -> const router = useRouter();
    # navigate('/path') -> router.push('/path')
    if "useNavigate" in content:
        content = content.replace("useNavigate", "useRouter")
        content = content.replace("const navigate = useRouter();", "const router = useRouter();")
        content = content.replace("navigate(", "router.push(")
        modified = True

    # Replace useLocation instances:
    # useLocation() -> usePathname()
    # const location = useLocation(); -> const pathname = usePathname();
    # location.pathname -> pathname
    if "useLocation" in content:
        content = content.replace("useLocation", "usePathname")
        modified = True
    if "const location = usePathname();" in content:
        content = content.replace("const location = usePathname();", "const pathname = usePathname();")
        modified = True
    if "location.pathname" in content:
        content = content.replace("location.pathname", "pathname")
        modified = True

    # Replace react-router-dom ScrollToTop (or references) if any
    
    # Replace <Link to="..." with <Link href="..."
    # We want to replace 'to=' only inside <Link tags
    # Let's search for <Link ... to={...} or to="..."
    link_pattern = r"(<Link\b[^>]*)\bto="
    if re.search(link_pattern, content):
        content = re.sub(link_pattern, r"\1href=", content)
        modified = True

    # Add "use client" if the file contains React hooks and does not already have it
    # Pages, Components and Context files only (exclude data files)
    is_client_file = (
        rel_path.startswith("pages/") or 
        rel_path.startswith("components/") or 
        rel_path.startswith("context/") or
        rel_path.startswith("pages\\") or 
        rel_path.startswith("components\\") or 
        rel_path.startswith("context\\")
    )
    if is_client_file and not content.startswith('"use client"') and not content.startswith("'use client'"):
        # Check if they use state, effects, ref, hooks, framer-motion, or editable
        uses_hooks = (
            "useState" in content or 
            "useEffect" in content or 
            "useRef" in content or 
            "useContext" in content or
            "useTransform" in content or
            "useScroll" in content or
            "motion" in content or
            "useAdmin" in content or
            "useTheme" in content or
            "usePathname" in content or
            "useRouter" in content
        )
        if uses_hooks:
            content = '"use client";\n\n' + content
            modified = True

    if modified:
        with open(file_path, "w", encoding="utf-8") as f:
            f.write(content)
        print(f"Migrated: {rel_path}")

# Run general migration
for root, dirs, files in os.walk(src_dir):
    for f in files:
        if not f.startswith("._") and (f.endswith(".js") or f.endswith(".jsx")):
            migrate_file(os.path.join(root, f))
