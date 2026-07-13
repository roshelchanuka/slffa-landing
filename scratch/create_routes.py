import os

routes = [
    {
        "dir": "",
        "component": "Home",
        "import_path": "../pages/Home",
        "title": "Home - SLFFA Cargo",
        "description": "Welcome to Sri Lanka Logistics and Freight Forwarders' Association Cargo Services."
    },
    {
        "dir": "about",
        "component": "About",
        "import_path": "../../pages/About",
        "title": "About Us - SLFFA Cargo",
        "description": "Learn more about SLFFA Cargo, our story, vision, mission, and core values."
    },
    {
        "dir": "services",
        "component": "Services",
        "import_path": "../../pages/Services",
        "title": "Our Services - SLFFA Cargo",
        "description": "Explore our ground handling operations, cargo services, and facility features."
    },
    {
        "dir": "news",
        "component": "News",
        "import_path": "../../pages/News",
        "title": "News & Events - SLFFA Cargo",
        "description": "Stay updated with the latest news, updates, and events from SLFFA Cargo."
    },
    {
        "dir": "useful-links",
        "component": "UsefulLinks",
        "import_path": "../../pages/UsefulLinks",
        "title": "Useful Links - SLFFA Cargo",
        "description": "Important links and resources for cargo operators and partners."
    },
    {
        "dir": "tools",
        "component": "Tools",
        "import_path": "../../pages/Tools",
        "title": "Tools & Guides - SLFFA Cargo",
        "description": "Calculate volumetric weight, check Air Waybill guides, and view standard trading conditions."
    },
    {
        "dir": "contact",
        "component": "Contact",
        "import_path": "../../pages/Contact",
        "title": "Contact Us - SLFFA Cargo",
        "description": "Get in touch with us for inquiries, support, and office locations."
    },
    {
        "dir": "ccn-hub",
        "component": "CcnHub",
        "import_path": "../../pages/CcnHub",
        "title": "CCN Hub - SLFFA Cargo",
        "description": "CCN cargo community network technologies integration and milestones."
    },
    {
        "dir": "cool-rooms",
        "component": "CoolRooms",
        "import_path": "../../pages/CoolRooms",
        "title": "Cool Rooms - SLFFA Cargo",
        "description": "Our state-of-the-art cold chain facilities and chambers control list."
    },
    {
        "dir": "login",
        "component": "Login",
        "import_path": "../../pages/Login",
        "title": "Login - SLFFA Cargo",
        "description": "Admin login portal for SLFFA Cargo content management."
    }
]

app_base = "/Volumes/SSD/SLFFA-WEB 02/SLFFA WEB/src/app"

for route in routes:
    dir_path = os.path.join(app_base, route["dir"])
    os.makedirs(dir_path, exist_ok=True)
    
    file_path = os.path.join(dir_path, "page.js")
    
    content = f"""import {route["component"]} from '{route["import_path"]}';

export const metadata = {{
  title: '{route["title"]}',
  description: '{route["description"]}',
}};

export default function Page() {{
  return <{route["component"]} />;
}}
"""
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(content)
        
    print(f"Created route page: src/app/{route['dir']}/page.js")
