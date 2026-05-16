/**
 * Copyright 2026 Circle Internet Group, Inc.  All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

"use client"

import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { sidebarData } from "@/lib/constants/sidebar-data"
import { usePathname } from "next/navigation"
import { useMemo } from "react"
import { ThemeSwitcher } from "@/components/theme-switcher"
import { GlobalSearch } from "@/components/global-search"

export function SiteHeader() {
  const pathname = usePathname()

  const navTitle = useMemo(() => {
    const navItem = sidebarData.navMain.find(item => item.url === pathname)
    if (!navItem) return "Payforge"

    return navItem.title
  }, [pathname])

  return (
    <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />
        
        <div className="flex items-center gap-3">
          <h1 className="text-xl font-semibold bg-gradient-to-r from-indigo-400 to-emerald-400 bg-clip-text text-transparent">
            Payforge
          </h1>
          <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            Arc Testnet
          </span>
        </div>

        <h2 className="text-base font-medium whitespace-nowrap ml-4 text-muted-foreground">
          {navTitle}
        </h2>

        {/* Global Search: Only visible on /dashboard */}
        {pathname === "/dashboard" && (
          <div className="ml-auto flex-1 max-w-md">
            <GlobalSearch wallets={[]} transactions={[]} />
          </div>
        )}

        {/* Right side */}
        <div className={`flex items-center gap-2 ${pathname !== "/dashboard" ? "ml-auto" : ""}`}>
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  )
}