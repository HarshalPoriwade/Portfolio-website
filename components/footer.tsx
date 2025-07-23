import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t py-6 md:py-8">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
          <p className="text-sm text-muted-foreground">© {currentYear} Harshal Poriwade. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="#home" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Back to Top
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
