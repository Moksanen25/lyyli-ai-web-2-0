#!/bin/bash

echo "🚀 Setting up Next.js project..."

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Create .env.local if it doesn't exist
if [ ! -f .env.local ]; then
    echo "🔧 Creating .env.local file..."
    cat > .env.local << EOF
# Next.js Environment Variables
NEXT_PUBLIC_APP_URL=http://localhost:3000
NODE_ENV=development
EOF
fi

# Build the project to check for errors
echo "🔨 Building project..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo ""
    echo "🎉 Next.js migration completed successfully!"
    echo ""
    echo "To start the development server:"
    echo "  npm run dev"
    echo ""
    echo "To start the production server:"
    echo "  npm run start"
    echo ""
    echo "📚 Check MIGRATION_GUIDE.md for detailed information about the changes."
else
    echo "❌ Build failed. Please check the errors above."
    exit 1
fi 