### PENJELASAN
disini adalah penjelasan tentang penggunaan web server khususnya nginx untuk menghandle reverse proxy atau pengalihan url : contohnya jika kita membuka web ilegal dan tidak di perbolehkan oleh kominfo, maka kita diarahkan ke https://trustpositif.kominfo.go.id/ , bisa di lihat bahwa https://trustpositif.kominfo.go.id/ juga pakai nginx [Wappalyze](https://chrome.google.com/webstore/detail/wappalyzer-technology-pro/gppongmhjkpfnbhagpmjfkannfbllamg?hl=id)

#### APA ITU DOCKER-COMPOSE?
docker-compose adalah tool untuk menjalankan docker image secara bersamaan, installasi disini [link](https://docs.docker.com/compose/install/)



### SERVICE

- ACCCOUNT SERVICE 1 (Diarahkan ke localhost/account) => Load balancer
- ACCCOUNT SERVICE 2 (Diarahkan ke localhost/account) => Load balancer
- PROFILE SERVICE (Diarahkan ke localhost/profile) => Reverse Proxy


### CARA MENJALANKAN
Pastikan sudah menginstall docker dan docker-compose di device kalian

Masuk ke semua folder service untuk install module/node_modules per service
```bash
cd <nama_service/folder>
yarn install
cd ..
```

Untuk menjalankan semua docker
```bash
docker-compose up -d # -d ini tujuannya untuk berjalan di brackground
```

Untuk mematikan semua docker
```bash
docker-compose down
```