import { Brain } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="text-slate-500 text-sm tracking-wider">
            © {new Date().getFullYear()} ARJUN K R. ALL RIGHTS RESERVED.
          </div>
        </div>
      </div>
    </footer>
  );
}