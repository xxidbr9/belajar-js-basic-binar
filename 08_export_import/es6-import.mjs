/* as itu untuk merubah nama export const */
import { nama, umur as umurSiswa } from "./es6-export.mjs";

// InfoSiswa == export default
import InfoSiswa, { alamat, pekerjaan } from "./es6-export.mjs";

// wild card import * artinya import semua dengan dimasukan kedalam variable, tidak perlu destructure
import * as SemuaExport from "./es6-export.mjs";

console.log({ nama, umurSiswa });
console.log({ InfoSiswa });
console.log({ SemuaExport });
