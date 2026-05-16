'use client';

import { IconUser, IconBell, IconShield, IconCurrencyDollar, IconLogout } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function SettingsPage() {
  return (
    <div className="p-6 md:p-8 space-y-8">
      <div>
        <h1 className="text-4xl font-semibold tracking-tight">Settings</h1>
        <p className="text-muted-foreground mt-1">Manage your account and preferences</p>
      </div>

      <div className="grid gap-8 max-w-3xl">
        {/* Profile */}
        <Card className="p-8">
          <div className="flex items-center gap-4 mb-6">
            <IconUser className="w-8 h-8 text-muted-foreground" />
            <div>
              <h2 className="text-2xl font-semibold">Profile Information</h2>
              <p className="text-muted-foreground">Update your personal details</p>
            </div>
          </div>
          <Button variant="outline">Edit Profile</Button>
        </Card>

        {/* Notifications */}
        <Card className="p-8">
          <div className="flex items-center gap-4">
            <IconBell className="w-8 h-8 text-muted-foreground" />
            <div>
              <h3 className="font-semibold">Notifications</h3>
              <p className="text-sm text-muted-foreground">Receive alerts for payouts and low balance</p>
            </div>
          </div>
          <Button variant="outline" className="mt-6">Manage Notifications</Button>
        </Card>

        {/* Security */}
        <Card className="p-8">
          <div className="flex items-center gap-4 mb-6">
            <IconShield className="w-8 h-8 text-muted-foreground" />
            <div>
              <h3 className="font-semibold">Security</h3>
              <p className="text-sm text-muted-foreground">Password, 2FA, and session management</p>
            </div>
          </div>
          <Button variant="outline">Security Settings</Button>
        </Card>

        {/* Preferences */}
        <Card className="p-8">
          <div className="flex items-center gap-4">
            <IconCurrencyDollar className="w-8 h-8 text-muted-foreground" />
            <div>
              <h3 className="font-semibold">Currency &amp; Language</h3>
              <p className="text-sm text-muted-foreground">Default currency is USDC</p>
            </div>
          </div>
        </Card>

        {/* Danger Zone */}
        <Card className="p-8 border-red-500/30">
          <h3 className="text-red-500 font-semibold mb-4">Danger Zone</h3>
          <Button variant="destructive" className="gap-2">
            <IconLogout />
            Log out from all devices
          </Button>
        </Card>
      </div>
    </div>
  );
}
