# Step pertama

#### install express dan knex
```bash
npm i express knex
```
####

#### initialize knex
```bash
npx knex init
```

#### buat schema / table baru (sebelum menjadi table di pg)
```bash
npx knex -h # buat lihat docs
npx knex migrate:make <nama_table> # untuk membuat table baru
npx knex migrate:latest # untuk mengaplikasikan table kedalam pg
```