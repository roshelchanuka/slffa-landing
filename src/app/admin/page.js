import { redirect } from 'next/navigation';

export default function AdminPage() {
  // Redirect to the static HTML file for the Admin Panel (Sveltia/Decap CMS)
  redirect('/admin/index.html');
}
