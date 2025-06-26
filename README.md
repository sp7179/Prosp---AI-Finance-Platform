# 💸 Props: AI Finance Platform

Props is a modern AI-powered personal finance platform built to help users efficiently manage their money across multiple accounts — with powerful features like recurring transaction handling, budget alerts, email notifications, and receipt scanning for smart entry.

## 🚀 Features

* 🔐 **Clerk Authentication** – Secure and seamless login/signup experience.
* 📁 **Multi-Account Support** – Create and manage multiple accounts (e.g., Work, Personal) with one default account for streamlined operations.
* 🔁 **Recurring Transactions** – Automatically categorize and add weekly/monthly transactions like rent, salary, subscriptions, etc.
* 🧾 **Receipt Scanning** – Smart receipt scanning extracts transaction details in seconds.
* ✏️ **Transaction Management** – Add, edit, or delete transactions with ease.
* 📊 **Email Alerts & Budget Tracking**

  * Get a **monthly spending report** delivered to your inbox.
  * Receive **alerts when spending exceeds 80%** of your monthly budget.

## 🛠️ Tech Stack

| Tool           | Purpose                                   |
| -------------- | ----------------------------------------- |
| **Next.js**    | React-based framework for SSR and routing |
| **React.js**   | Frontend UI library                       |
| **Inngest**    | Background jobs and scheduled workflows   |
| **Clerk**      | Authentication and user session handling  |
| **PostgreSQL** | Relational database                       |
| **Prisma**     | Type-safe database ORM                    |

## 🧹 Architecture Overview

```
Next.js (Frontend & API routes)
│
├── Clerk (Authentication)
│
├── Inngest (Job scheduler for recurring txns & alerts)
│
├── PostgreSQL + Prisma (Database & ORM)
│
└── Transaction Engine
     ├── Add/Edit/Delete
     ├── Recurring logic
     ├── Budget monitoring
     └── Receipt parsing (OCR module)
```

## 📬 Monthly Email Alerts

Props monitors your budget and sends:

* A **monthly summary report**
* A **warning alert** if your spendings cross 80% of your set budget

## 🧾 Smart Receipt Scanner

Upload a photo or scan of your receipt — Props will:

* Automatically extract the merchant, amount, date, and category
* Save the transaction into the correct account

## 📦 Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/sp7179/Prosp---AI-Finance-Platform.git
   cd props-finance-platform
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up your `.env.local`:

   ```
   DATABASE_URL=postgresql://user:password@localhost:5432/props
   CLERK_SECRET_KEY=your-clerk-secret
   CLERK_PUBLISHABLE_KEY=your-clerk-publishable
   INNGEST_EVENT_KEY=your-inngest-key
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

## ⚙️ Scripts

| Command              | Description                    |
| -------------------- | ------------------------------ |
| `npm run dev`        | Start development server       |
| `npx prisma db push` | Sync Prisma schema to database |
| `npm run build`      | Build for production           |

## 📚 Future Improvements

* 🔄 Auto-categorization using AI/ML
* 📱 Mobile support with PWA or React Native
* 📅 Import transactions from CSV/Bank APIs
* 📊 Data visualization & dashboard upgrades

---

## 🙌 Author

**Shourish Paul**
🚀 B.Tech @ SRMIST Delhi NCR | Full-Stack Developer | [LinkedIn](https://linkedin.com/in/shourishpaul)

---

## 📝 License

This project is licensed under the [MIT License](LICENSE).
