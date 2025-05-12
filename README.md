# Administrace DD Areny

Tento projekt představuje frontend administrátorského dashboardu pro **DD Arenu** v Pardubicích. Využívá šablonu `dashboard-01` z UI knihovny shadcn (grafy využívají Recharts, styling je založený na Tailwind CSS).

## Struktura složek

- `src/app` – hlavní aplikace (Next.js App Router)
- `src/app/dashboard` – hlavní dashboard s grafy, tabulkami a náhledovými kartami
- `src/components` – opakovaně použitelné UI komponenty (sidebar, hlavička, grafy, tabulky)
- `public` – statické assety (ikony, obrázky)
- `src/app/globals.css` – globální styly a CSS proměnné pro téma

## Jak spustit

```bash
npm install
npm run dev
```

Poté otevřete v prohlížeči [http://localhost:3000](http://localhost:3000).

## Plán funkcionality

1. Základní navigace v sidebaru s moduly:
   - Dashboard
   - Events & Ticketing
   - CRM
   - Reservations
   - Retail & Inventory
   - F&B / Gastro
   - Security & Access
   - Analytics / Reports
   - Settings
2. Sekce Dokumenty (v dolní části sidebaru):
   - Data Library
   - Reports
   - Word Assistant
3. Pouze frontend (zatím bez backendové logiky, autentizace nebo API).
4. V dalších iteracích:
   - Napojení na backendové služby
   - Autentizace a autorizace uživatelů
   - Rozšířená správa dat (CRUD operace)
