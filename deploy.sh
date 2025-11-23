#!/bin/bash
echo "🌳 Deploying ReLeaf to Vercel..."
echo ""
echo "Step 1: Login to Vercel (if not already logged in)"
npx vercel login
echo ""
echo "Step 2: Deploying..."
npx vercel --prod
echo ""
echo "✅ Done! Your app is live!"
