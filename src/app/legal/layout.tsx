"use client";

import { Suspense } from "react";
import { motion } from "framer-motion";
import LegalHeader from "@/components/layout/LegalHeader";
import LegalSidebar from "@/components/layout/LegalSidebar";
import LegalSidebarSkeleton from "@/components/layout/LegalSidebarSkeleton";

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Legal Header */}
      <LegalHeader />

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar with Suspense */}
          <div className="lg:col-span-1">
            <Suspense fallback={<LegalSidebarSkeleton />}>
              <LegalSidebar />
            </Suspense>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8"
            >
              {children}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
} 