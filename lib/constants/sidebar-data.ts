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

import {
  IconDashboard,
  IconListDetails,
  IconWallet,
  IconSend,
  IconUsers,
  IconRobot,
  IconCreditCard,
  IconSettings,
  IconHistory,
} from "@tabler/icons-react"

export const sidebarData = {
  user: {
    name: "Demo User",
    email: "you@payforge.co",
    avatar: "/avatars/shadcn.jpg", // You can change this later
  },
  navMain: [
    {
      title: "Overview",
      url: "/dashboard",
      icon: IconDashboard,
    },
    {
      title: "Treasury",
      url: "/dashboard/treasury",
      icon: IconWallet,
    },
    {
      title: "Payouts",
      url: "/dashboard/payouts",
      icon: IconSend,
    },
    {
      title: "Recipients",
      url: "/dashboard/recipients",
      icon: IconUsers,
    },
    {
      title: "Transactions",
      url: "/dashboard/activity",
      icon: IconHistory,
    },
    {
      title: "Automations",
      url: "/dashboard/automations",
      icon: IconRobot,
    },
    {
      title: "Credit",
      url: "/dashboard/credit",
      icon: IconCreditCard,
    },
    {
      title: "Settings",
      url: "/dashboard/settings",
      icon: IconSettings,
    },
  ],
}