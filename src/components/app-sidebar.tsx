"use client"

import * as React from "react"
import {
  IconCamera,
  IconChartBar,
  IconDashboard,
  IconDatabase,
  IconFileAi,
  IconFileDescription,
  IconFileWord,
  IconHelp,
  IconReport,
  IconSearch,
  IconSettings,
  IconUsers,
  IconTicket,
  IconCalendar,
  IconShoppingCart,
  IconCoffee,
  IconLock,
} from "@tabler/icons-react"

import { NavDocuments } from "@/components/nav-documents"
import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const data = {
  user: {
    name: "Radek Novák",
    email: "novak@ddarena.com",
    avatar: "https://images.blekota.com/download%20(17).jpeg",
  },
  navMain: [
    {
      title: "Přehled",
      url: "/dashboard",
      icon: IconDashboard,
    },
    {
      title: "Akce & Ticketing",
      url: "/events",
      icon: IconTicket,
    },
    {
      title: "CRM",
      url: "/crm",
      icon: IconUsers,
    },
    {
      title: "Rezervace",
      url: "/reservations",
      icon: IconCalendar,
    },
    {
      title: "Maloobchod & Inventář",
      url: "/inventory",
      icon: IconShoppingCart,
    },
    {
      title: "F&B / Gastro",
      url: "/gastro",
      icon: IconCoffee,
    },
    {
      title: "Bezpečnost & Přístup",
      url: "/security",
      icon: IconLock,
    },
    {
      title: "Analytika / Reporty",
      url: "/analytics",
      icon: IconChartBar,
    },
    {
      title: "Nastavení",
      url: "/settings",
      icon: IconSettings,
    },
  ],
  navClouds: [
    {
      title: "Capture",
      icon: IconCamera,
      isActive: true,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Proposal",
      icon: IconFileDescription,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Prompts",
      icon: IconFileAi,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Nastavení",
      url: "#",
      icon: IconSettings,
    },
    {
      title: "Nápověda",
      url: "#",
      icon: IconHelp,
    },
    {
      title: "Hledat",
      url: "#",
      icon: IconSearch,
    },
  ],
  documents: [
    {
      name: "Datová knihovna",
      url: "#",
      icon: IconDatabase,
    },
    {
      name: "Reporty",
      url: "#",
      icon: IconReport,
    },
    {
      name: "Ai Asistent",
      url: "#",
      icon: IconFileWord,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <div className="flex items-center gap-2">
                <span className="text-base font-semibold">Administrace - DD</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavDocuments items={data.documents} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}