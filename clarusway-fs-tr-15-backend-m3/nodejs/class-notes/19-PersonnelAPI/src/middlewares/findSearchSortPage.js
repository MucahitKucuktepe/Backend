// "use strict";
// /* -------------------------------------------------------
//     EXPRESS - Personnel API
// ------------------------------------------------------- */
// // app.use(findSearchSortPage):

// module.exports = (req, res, next) => {
//   // Searching & Sorting & Pagination:

//   // SEARCHING: URL?search[key1]=value1&search[key2]=value2
//   const search = req.query?.search || {};
//   for (let key in search) search[key] = { $regex: search[key], $options: "i" };

//   // Cancelled -> SORTING: URL?sort[key1]=1&sort[key2]=-1 (1:ASC, -1:DESC)
//   // mongoose=^8.0 -> SORTING: URL?sort[key1]=asc&sort[key2]=desc (asc: A->Z - desc: Z->A)
//   const sort = req.query?.sort || {};

//   // PAGINATION: URL?page=1&limit=10
//   // LIMIT:
//   let limit = Number(req.query?.limit);
//   limit = limit > 0 ? limit : Number(process.env?.PAGE_SIZE || 20);
//   // PAGE:
//   let page = Number(req.query?.page);
//   page = (page > 0 ? page : 1) - 1;
//   // SKIP:
//   let skip = Number(req.query?.skip);
//   skip = skip > 0 ? skip : page * limit;

//   // Run SearchingSortingPagination engine for Model:
//   res.getModelList = async function (Model, populate = null) {
//     return await Model.find(search)
//       .sort(sort)
//       .skip(skip)
//       .limit(limit)
//       .populate(populate);
//   };

//   // Details:
//   res.getModelListDetails = async function (Model) {
//     const data = await Model.find(search);
//     // Sorgu detaylarını içeren bir obje oluşturur.
//     let details = {
//       filter, // Kullanılan filtre parametrelerini saklar.
//       search, // Kullanılan arama parametrelerini saklar.
//       sort, // Kullanılan sıralama parametrelerini saklar.
//       skip, // Atlanacak kayıt sayısını saklar.
//       limit, // Sayfa başına gösterilecek kayıt sayısını saklar.
//       page, // Geçerli sayfa numarasını saklar.
//       pages: {
//         // Sayfalama bilgilerini içeren bir alt obje.
//         previous: page > 0 ? page : false, // Bir önceki sayfa varsa onun numarasını, yoksa false değerini saklar.
//         current: page + 1, // Geçerli sayfa numarası
//         next: page + 2, // Bir sonraki sayfa numarasını hesaplar.
//         total: Math.ceil(data.length / limit), // Toplam sayfa sayısını hesaplar.
//       },
//       totalRecords: data.length, // Toplam kayıt sayısını saklar.
//     };
//     // Eğer bir sonraki sayfa mevcut toplam sayfa sayısını aşarsa, false olarak ayarlar.
//     details.pages.next =
//       details.pages.next > details.pages.total ? false : details.pages.next;
//     // Eğer toplam kayıt sayısı, sayfa limitini aşmıyorsa, sayfalama bilgileri olarak false ayarlar.
//     if (details.totalRecords <= limit) details.pages = false;
//     // Hazırlanan detaylar objesini döndürür.
//     return details;
//   };

//   next();
// };
"use strict"
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */
// app.use(findSearchSortPage):
module.exports = (req, res, next) => {
// Searching & Sorting & Pagination:
    // SEARCHING: URL?search[key1]=value1&search[key2]=value2
    const search = req.query?.search || {}
    for (let key in search) search[key] = { $regex: search[key], $options: 'i' }
    // Cancelled -> SORTING: URL?sort[key1]=1&sort[key2]=-1 (1:ASC, -1:DESC)
    // mongoose=^8.0 -> SORTING: URL?sort[key1]=asc&sort[key2]=desc (asc: A->Z - desc: Z->A)
    const sort = req.query?.sort || {}
    // PAGINATION: URL?page=1&limit=10
    // LIMIT:
    let limit = Number(req.query?.limit)
    limit = limit > 0 ? limit : Number(process.env?.PAGE_SIZE || 20)
    // PAGE:
    let page = Number(req.query?.page)
    page = (page > 0 ? page : 1) - 1
    // SKIP:
    let skip = Number(req.query?.skip)
    skip = skip > 0 ? skip : (page * limit)
    // Run SearchingSortingPagination engine for Model:
    res.getModelList = async function (Model, filters = {}, populate = null) {
        const filtersAndSearch = { ...filters, ...search  }
        return await Model.find(filtersAndSearch).sort(sort).skip(skip).limit(limit).populate(populate)
    }
    // Details:
    res.getModelListDetails = async function (Model, filters = {}) {
        const filtersAndSearch = { ...filters, ...search }
        const data = await Model.find(filtersAndSearch)
        let details = {
            search,
            sort,
            skip,
            limit,
            page,
            pages: {
                previous: (page > 0 ? page : false),
                current: page + 1,
                next: page + 2,
                total: Math.ceil(data.length / limit)
            },
            totalRecords: data.length,
        }
        details.pages.next = (details.pages.next > details.pages.total ? false : details.pages.next)
        if (details.totalRecords <= limit) details.pages = false
        return details
    }
    next()
}



