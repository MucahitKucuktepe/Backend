"use strict";
/* ====================================================== */
/*                     BLOG API MODELS                    */
/* ====================================================== */
const mongoose = require("mongoose");

// const nameSchema= new mongoose.Schema({fields},{tablo adı})

/* ====================================================== */
/*                    models property                */
/* ====================================================== */
/* 1. type: Alanın veri türünü belirtir. Örneğin, String, Number, Date, Array, vb. */
/* 2. default: Alanın varsayılan değerini belirtir. Eğer bu değer belirtilmezse, alanın varsayılan değeri bu olur. */
/* 3. required: Bu alanın zorunlu olup olmadığını belirtir. true ise, bu alan boş geçilemez. */
/* 4. enum: Alanın alabileceği değerleri sınırlar. Bir dizi içinde belirtilen değerlerden birine sahip olmalıdır. */
/* 5. min / max: Sayısal alanların alabileceği minimum ve maksimum değerleri belirtir. */
/* 6. trim: String alanlar için, girilen değerin başındaki ve sonundaki boşlukları kaldırır.
/* 7.lowercase / uppercase: String alanlar için, girilen değeri otomatik olarak küçük harfe veya büyük harfe dönüştürür.
/* 8.lowercase / uppercase: String alanlar için, girilen değeri otomatik olarak küçük harfe veya büyük harfe dönüştürür.
 */

const blogPostSchema = new mongoose.Schema(
  {
    //_id
    //categoryId
    title: {
      type: String,
      trim: true,
      required: true,
    },
    content: {
      type: String,
      trim: true,
      required: true,
    },
    // createAt
    // updateAt
  },
  {
    collection: "blogPost",
    timestamps: true,
  }
);

// mongoose.model('model ismi', 'hangi şemadan')

//  const BlogPostModel=mongoose.model('BlogPost', blogPostSchema)

module.exports = {
  BlogPost: mongoose.model("BlogPost", blogPostSchema),
};

// const nameSchema = new mongoose.Schema(
//   {
//     // _id: // auto created and  increment

//     // fieldName:Type,
//     // fieldName:String,
//     // fieldName2:BigInt

//     fieldName: {
//       type: String,
//       default: null,
//       trim: true,
//       unique: true, // benzersiz kayıt
//       select: true, // model çağrıldığında gelsin mi
//       index: false, // aramalarda erişimi hıxzlandırır
//       required:true, // veri girişi gereklimi
//       required: [true, 'error message'],
//       enum : [[1,2,3], 'error message'], // belirli bir pattern e göre veri girişi
//       validate: [function(data){return true}, 'error message'], // veriyi fonksiyonla doğrulama
//       get: function(data){return data}, // veriyi çağırırken çalışacak fonksiyon
//       set:function(data){return data}   // veriyi kaydederken çalışacak fonksiyon

//     },
//   },

//   {
//     collection:'collectionName', // tablo ismi
//     timestamps:true // createdate, updatedate
//   }
// );
