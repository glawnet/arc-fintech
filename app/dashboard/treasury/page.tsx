'use client';

import { useState } from "react";
import { IconWallet, IconTrendingUp, IconRefresh } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function TreasuryPage() {
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 1200);
  };

  const assets = [
    { chain: "Arc Testnet", balance: "0.00", symbol: "USDC", change: "+0.00%" },
    { chain: "Base Sepolia", balance: "0.00", symbol: "USDC", change: "+0.00%" },
    { chain: "Avalanche Fuji", balance: "0.00", symbol: "USDC", change: "+0.00%" },
    { chain: "Ethereum Sepolia", balance: "0.00", symbol: "USDC", change: "+0.00%" },
  ];

  return (
    <div className="p-6 md:p-8 space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-semibold tracking-tight">Treasury</h1>
          <p className="text-muted-foreground mt-1">Manage and optimize your stablecoin treasury</p>
        </div>
        <Button onClick={handleRefresh} disabled={isRefreshing} variant="outline">
          <IconRefresh className={`mr-2 ${isRefreshing ? 'animate-spin' : ''}`} />
          Refresh Balances
        </Button>
      </div>

      {/* Total Treasury Value */}
      <div className="bg-gradient-to-br from-zinc-900 to-black border border-border rounded-3xl p-8">
        <p className="text-muted-foreground text-sm uppercase tracking-widest">Total Treasury Value</p>
        <p className="text-6xl font-semibold mt-3">$0.00</p>
        <p className="text-emerald-500 flex items-center gap-1 mt-2">
          <IconTrendingUp size={18} /> 0% this month
        </p>
      </div>

      {/* Assets Breakdown */}
      <div>
        <h2 className="text-2xl font-semibold mb-6">Assets by Chain</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {assets.map((asset, index) => (
            <Card key={index} className="p-6 hover:border-primary/50 transition-all">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-medium">{asset.chain}</p>
                  <p className="text-3xl font-semibold mt-2">${asset.balance}</p>
                </div>
                <div className="text-right">
                  <span className="text-sm bg-muted px-3 py-1 rounded-full">{asset.symbol}</span>
                  <p className="text-emerald-500 text-sm mt-4">{asset.change}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6 cursor-pointer hover:bg-muted/50 transition-all">
          <h3 className="font-semibold">Rebalance Treasury</h3>
          <p className="text-sm text-muted-foreground mt-2">Move funds across chains automatically</p>
          <Button className="mt-6 w-full">Rebalance Now</Button>
        </Card>

        <Card className="p-6 cursor-pointer hover:bg-muted/50 transition-all">
          <h3 className="font-semibold">Earn Yield</h3>
          <p className="text-sm text-muted-foreground mt-2">Put idle USDC to work</p>
          <Button className="mt-6 w-full" variant="outline">Explore Opportunities</Button>
        </Card>

        <Card className="p-6 cursor-pointer hover:bg-muted/50 transition-all">
          <h3 className="font-semibold">Export Report</h3>
          <p className="text-sm text-muted-foreground mt-2">Download treasury activity</p>
          <Button className="mt-6 w-full" variant="outline">Download CSV</Button>
        </Card>
      </div>
    </div>
  );
}