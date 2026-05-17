"use client";

/**
 * Shared Framer Motion setup — lazy-loaded features for minimal bundle impact.
 *
 * Usage anywhere in the app:
 *   import { MotionProvider, m } from "@/lib/motion";
 *
 *   <MotionProvider>
 *     <m.div animate={{ opacity: 1 }} />
 *   </MotionProvider>
 *
 * MotionProvider wraps LazyMotion + domAnimation so animation code is
 * code-split and only loaded when a component actually animates.
 * The `m` component is the tree-shakeable replacement for `motion`.
 */

export { LazyMotion as MotionProvider, m, AnimatePresence } from "framer-motion";
export { domAnimation as motionFeatures } from "framer-motion";
