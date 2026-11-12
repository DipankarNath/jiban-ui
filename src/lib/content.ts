import type { Icon } from "@phosphor-icons/react"
import {
  Bulldozer,
  Code,
  Globe,
  Leaf,
  Receipt,
  ShoppingCart,
} from "@phosphor-icons/react"

export type Service = {
  icon: Icon
  title: string
  description: string
  /** green tile in the mockup, navy otherwise */
  tone: "navy" | "green"
}

export const services: Service[] = [
  {
    icon: ShoppingCart,
    title: "E-commerce & Online Retail",
    description:
      "Quality products and trusted shopping experience through Amazon, Flipkart, Meesho, Myntra and more.",
    tone: "navy",
  },
  {
    icon: Leaf,
    title: "Consumer Products & Private Labels",
    description:
      "Dry foods, Indian spices & masalas, home and kitchen products and other everyday essentials.",
    tone: "green",
  },
  {
    icon: Code,
    title: "Website Development & Digital Solutions",
    description:
      "Business websites, e-commerce websites, online store setup, and digital growth solutions.",
    tone: "navy",
  },
  {
    icon: Receipt,
    title: "Accounting, Billing & POS Software",
    description:
      "Accounting software, billing systems, barcode-based POS, inventory management and more.",
    tone: "green",
  },
  {
    icon: Globe,
    title: "Japan–India Trade & International Business",
    description:
      "Import & export support, used cars, heavy machinery, industrial equipment and other products.",
    tone: "navy",
  },
  {
    icon: Bulldozer,
    title: "Heavy Machinery & Industrial Equipment",
    description:
      "Sourcing, trading and facilitating business opportunities for machinery and equipment from Japan and beyond.",
    tone: "navy",
  },
]

export const navLinks = [
  { label: "Home", href: "#top" },
  { label: "About Us", href: "#about" },
  { label: "Our Services", href: "#services", dropdown: "services" as const },
  { label: "Products", href: "#services" },
  { label: "Blog & Insights", href: "#news" },
  { label: "Contact", href: "#contact" },
]

export const contact = {
  phone: "+91 99034 77066",
  email: "jienterprise724@gmail.com",
  address: ["Halder Para, Gondalpara", "Panchla, Howrah – 711302", "West Bengal, India"],
}
