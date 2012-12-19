(function() {
    var app = this.app;

    app.levelAttrs = {
        //alto - 1
        '1' : {
            fill: "#C74A53",
            stroke: "#fff",
            "stroke-width": 1,
            "stroke-linejoin": "round"
        },
        //medio - 2
        '2' : {
            fill: "#E2BA00",
            stroke: "#fff",
            "stroke-width": 1,
            "stroke-linejoin": "round"
        },
        //bajo - 3
        '3' : {
            fill: "#ACDE5C",
            stroke: "#fff",
            "stroke-width": 1,
            "stroke-linejoin": "round"
        }
    };
    app.drawMap = function(R) {
        return {
        // Málaga
            '29' : [R.path('M161,395, 155,385, 148,385, 153,382, 158,378, 160,373, 160,367, 166,369, 168,366, 168,360, 176,354, 176,351, 182,351, 186,347, 197,347, 202,354, 205,361, 221,368, 223,373, 208,373, 195,375, 187,384, 177,385, 166,389, 161,395')],
            // Madrid
            '28' : [R.path('M246,203, 251,197, 247,191, 245,181, 243,179, 240,176, 238,174, 235,168, 234,166, 234,162, 236,155, 236,151, 235,148, 233,143, 229,143, 220,149, 214,160, 207,166, 204,173, 199,180, 189,194, 195,191, 206,192, 219,196, 228,201, 224,205, 217,210, 230,207, 237,203, 246,203, 246,203, 246,203')],
            // Murcia
            '30': [R.path('M339,324, 343,319, 338,312, 331,304, 335,294, 330,288, 333,283, 334,275, 327,270, 322,273, 318,273, 313,282, 314,290, 308,292, 304,290, 295,295, 293,294, 291,294, 288,296, 286,298, 283,303, 280,308, 285,314, 287,313, 294,315, 294,328, 300,337, 308,341, 319,333, 329,332, 341,331, 346,328, 339,324')],
            // Girona
            '17' : [R.path('M501,85, 507,79, 496,72, 486,75, 484,78, 480,79, 476,79, 472,78, 465,76, 461,74, 455,78, 449,71, 444,71, 448,80, 449,82, 455,82, 458,82, 456,88, 465,89, 474,93, 474,100, 469,106, 477,112, 485,111, 487,116, 498,107, 504,102, 503,93, 501,85')],
            // Melilla
            '52' : [R.path('M253,438, 246,448, 252,453, 261,453, 253,438')],
            // Ceuta
            '51' : [R.path('M161,428, 158,423, 154,415, 144,421, 145,433, 161,428')],
            // Zamora
            '49' : [R.path('M102,101, 109,100, 110,105, 110,115, 115,115, 123,120, 116,131, 116,131, 131,138, 141,136, 158,143, 163,140, 164,140, 160,139, 160,129, 162,121, 156,112, 161,108, 160,99, 157,96, 150,92, 138,92, 134,91, 127,90, 122,89, 116,88, 106,86, 101,84, 101,83, 99,85, 90,93, 92,96, 91,99, 102,101')],
            // Lleida
            '25' : [R.path('M443,82, 449,82, 448,80, 444,71, 443,71, 433,73, 433,68, 430,59, 422,59, 418,57, 402,50, 400,60, 404,70, 401,96, 398,105, 388,115, 392,121, 391,123, 389,126, 388,130, 389,134, 390,135, 392,135, 394,134, 398,134, 402,134, 414,132, 419,125, 428,121, 433,122, 432,122, 432,120, 432,118, 431,114, 432,110, 432,108, 437,110, 441,101, 443,91, 442,87, 443,82, 443,82')],
            // Cantabria
            '39' : [R.path('M235,30, 243,26, 254,25, 253,23, 250,23, 240,20, 234,21, 229,16, 220,21, 219,16, 202,21, 191,23, 188,28, 178,34, 181,39, 185,43, 191,41, 198,42, 206,49, 204,51, 208,56, 210,56, 220,53, 220,51, 220,49, 219,47, 217,46, 213,46, 219,38, 226,34, 229,34, 234,35, 235,34, 235,30')],
            // Las Palmas
            '35' : [
                // Lanzarote
                R.path('M541,401, 545,402, 547,400, 552,398, 557,395, 557,391, 560,387, 558,384, 555,390, 550,390, 544,393, 543,399, 541,401'),
                // Fuerteventura
                R.path('M514,440, 526,433, 527,429, 530,424, 534,419, 535,410, 539,409, 543,412, 541,420, 541,426, 538,433, 528,435, 522,441, 514,440'),
                // Gran Canaria
                R.path('M458,449, 459,443, 462,440, 463,436, 470,437, 476,442, 476,449, 471,454, 468,456, 463,455, 458,449')
            ],
            // Santa Cruz de tenerife
            '38' : [
                // Tenerife
                R.path('M412,426, 424,425, 430,422, 434,418, 440,416, 444,416, 445,418, 440,421, 436,425, 432,436, 422,443, 416,436, 412,426'),
                // La Palma
                R.path('M371,421, 376,415, 375,411, 376,407, 375,403, 369,403, 365,406, 368,413, 371,419, 371,421'),
                // La Gomera
                R.path('M393,438, 396,442, 398,442, 401,442, 403,440, 404,439, 401,435, 396,434, 393,438'),
                // El Hierro
                R.path('M358,457, 359,455, 361,455, 364,453, 368,452, 370,454, 367,458, 367,461, 363,458, 358,457')
            ],
            '7' : [
                // Menorca
                R.path('M538,203, 539,201, 540,199, 539,196, 538,194, 551,194, 561,200, 562,207, 556,207, 547,201, 538,203'),
                // Mallorca
                R.path('M466,224, 478,217, 490,206, 498,202, 507,201, 502,204, 502,206, 509,206, 504,208, 504,212, 509,215, 516,212, 519,214, 519,221, 516,225, 510,237, 501,244, 497,240, 488,240, 485,232, 486,229, 480,226, 474,229, 474,232, 466,226, 466,224'),
                // Formentera
                R.path('M418,284, 418,281, 418,279, 420,279, 422,279, 422,281, 427,282, 428,284, 421,282, 418,284'),
                // Ibiza
                R.path('M417,272, 413,270, 411,270, 410,267, 411,264, 413,264, 415,263, 414,259, 422,256, 426,255, 428,258, 427,262, 422,266, 418,269, 418,271, 417,272')
            ],
            // La Rioja
            '26' : [R.path('M297,94, 300,90, 306,90, 304,86, 297,80, 289,75, 277,72, 277,72, 269,72, 261,67, 258,62, 258,62, 256,64, 249,62, 249,69, 249,81, 251,92, 259,97, 264,91, 265,97, 273,97, 278,90, 287,92, 290,101, 302,103, 304,102, 297,94')],
            // Zaragoza
            '50' : [R.path('M389,134, 389,131, 388,128, 387,128, 379,132, 372,130, 368,120, 365,119, 362,117, 358,113, 354,110, 352,107, 350,103, 347,101, 342,98, 339,97, 343,94, 344,90, 344,85, 343,81, 340,75, 339,72, 339,56, 331,58, 326,66, 319,77, 318,92, 321,95, 318,101, 302,98, 301,99, 304,102, 302,103, 300,102, 301,112, 295,119, 295,129, 292,131, 291,128, 284,134, 289,145, 296,143, 309,154, 313,152, 318,149, 320,148, 325,146, 327,144, 335,144, 337,147, 346,145, 349,137, 356,134, 362,138, 374,144, 381,148, 384,149, 383,146, 387,140, 389,136, 390,135, 389,134')],
            // Toledo
            '45' : [R.path('M256,222, 254,220, 251,215, 249,212, 247,208, 246,203, 237,203, 230,207, 217,210, 224,205, 228,201, 219,196, 206,192, 195,191, 189,194, 189,193, 185,194, 181,191, 170,197, 166,200, 160,200, 160,198, 157,199, 156,211, 159,216, 164,216, 164,227, 170,236, 183,235, 186,233, 190,228, 200,233, 207,228, 207,239, 220,243, 231,238, 241,234, 248,234, 256,229, 256,222')],
            // Ciudad Real
            '13' : [R.path('M264,268, 259,259, 263,241, 263,240, 259,239, 257,239, 256,229, 248,234, 241,234, 231,238, 220,243, 207,239, 207,228, 200,233, 190,228, 186,233, 183,235, 184,235, 182,240, 181,247, 174,255, 175,264, 172,271, 172,272, 177,276, 187,282, 194,289, 201,292, 204,293, 203,288, 217,288, 231,286, 248,286, 256,283, 263,281, 264,278, 267,272, 264,268')],
            // Albacete
            '2' : [R.path('M333,275, 336,275, 338,274, 336,269, 337,269, 335,260, 329,261, 323,255, 326,241, 315,237, 314,235, 309,236, 300,242, 289,240, 285,245, 277,242, 274,242, 268,241, 264,240, 263,240, 263,241, 259,259, 264,268, 267,272, 264,278, 262,282, 266,284, 270,285, 272,289, 274,292, 275,299, 270,305, 275,308, 283,313, 280,308, 283,303, 286,298, 288,296, 291,294, 293,294, 295,295, 304,290, 308,292, 314,290, 313,282, 318,273, 322,273, 327,270, 333,275')],
            // Navarra
            '31' : [R.path('M297,80, 304,86, 306,90, 300,90, 297,94, 301,99, 302,98, 318,101, 321,95, 318,92, 319,77, 326,66, 331,58, 339,56, 339,56, 343,47, 348,51, 348,47, 346,46, 340,45, 330,43, 325,42, 322,38, 319,41, 313,38, 315,30, 307,25, 295,32, 293,39, 288,46, 284,50, 280,62, 274,64, 277,72, 289,75, 297,80')],
            // Lugo
            '27' : [R.path('M98,46, 93,39, 98,36, 97,34, 92,34, 88,28, 84,20, 90,14, 90,13, 88,12, 81,12, 75,5, 69,2, 64,2, 62,10, 59,19, 54,28, 54,47, 51,53, 56,58, 55,68, 64,74, 80,75, 82,79, 88,70, 89,59, 97,51, 99,48, 98,46')],
            // Ourense
            '32' : [R.path('M102,79, 99,72, 92,70, 88,69, 88,70, 82,79, 80,75, 64,74, 55,68, 55,66, 50,68, 44,67, 37,72, 43,84, 40,89, 43,92, 49,94, 42,103, 46,108, 54,102, 61,103, 72,105, 81,105, 91,99, 92,96, 90,93, 99,85, 101,83, 102,79')],
            // Salamanca
            '37' : [R.path('M163,140, 158,143, 141,136, 131,138, 115,131, 114,135, 108,139, 100,148, 96,149, 94,150, 99,154, 102,158, 100,176, 97,189, 103,191, 110,187, 124,181, 129,187, 140,189, 145,182, 154,179, 160,167, 168,156, 169,142, 163,140')],
            // León
            '24' : [R.path('M185,43, 181,39, 178,34, 180,33, 177,31, 172,33, 169,38, 158,38, 150,42, 147,41, 143,40, 140,42, 138,45, 135,42, 131,40, 128,41, 125,42, 119,41, 113,43, 112,49, 100,49, 99,48, 97,51, 89,59, 88,69, 92,70, 99,72, 102,79, 101,84, 106,86, 116,88, 122,89, 127,90, 134,91, 138,92, 150,92, 157,96, 160,99, 160,98, 157,87, 160,83, 171,81, 173,77, 173,76, 177,62, 176,52, 179,45, 185,43')],
            // Araba
            '1' : [R.path('M279,46, 270,45, 271,41, 265,41, 256,39, 255,34, 250,34, 247,33, 246,33, 247,37, 247,42, 251,43, 253,47, 249,48, 242,48, 246,53, 251,57, 258,62, 261,67, 269,72, 277,72, 274,64, 280,62, 284,50, 285,49, 279,46')],
            // Burgos
            '9' : [R.path('M256,64, 258,62, 251,57, 246,53, 242,48, 249,48, 253,47, 251,43, 247,42, 247,37, 246,33, 235,35, 235,34, 234,35, 229,34, 226,34, 219,38, 213,46, 217,46, 219,47, 220,49, 220,51, 220,53, 210,56, 202,58, 200,72, 203,87, 208,93, 216,98, 209,104, 211,109, 212,114, 214,117, 217,122, 218,125, 225,122, 231,122, 228,118, 234,118, 241,110, 241,104, 247,107, 255,98, 256,95, 251,92, 249,81, 249,69, 249,62, 256,64')],
            // Soria
            '42' : [R.path('M284,134, 291,128, 292,131, 295,129, 295,119, 301,112, 300,102, 290,101, 287,92, 278,90, 273,97, 265,97, 264,91, 259,97, 256,95, 255,98, 247,107, 241,104, 241,110, 234,118, 228,118, 232,123, 237,123, 240,128, 247,136, 257,136, 268,142, 275,148, 287,146, 288,144, 284,134')],
            // Segovia
            '40' : [R.path('M237,123, 232,123, 231,122, 225,122, 218,125, 217,123, 215,119, 208,125, 192,127, 191,134, 184,143, 189,156, 194,164, 197,171, 204,168, 206,169, 207,166, 214,160, 220,149, 229,143, 233,143, 232,143, 238,136, 247,136, 240,128, 237,123')],
            // Guadalajara
            '19' : [R.path('M307,174, 310,175, 311,172, 311,165, 310,160, 309,155, 309,154, 296,143, 289,145, 288,144, 287,146, 275,148, 268,142, 257,136, 247,136, 238,136, 232,143, 234,147, 236,151, 236,155, 234,162, 234,166, 235,168, 238,174, 240,176, 243,179, 245,181, 247,191, 251,197, 252,196, 257,197, 260,190, 261,181, 272,182, 270,178, 273,175, 282,170, 289,171, 296,175, 299,182, 302,182, 307,174')],
            // Cuenca
            '16' : [R.path('M313,231, 319,222, 323,221, 325,215, 326,211, 327,207, 328,207, 327,205, 329,200, 316,196, 302,183, 302,182, 299,182, 296,175, 289,171, 282,170, 273,175, 270,178, 272,182, 261,181, 260,190, 257,197, 252,196, 246,203, 247,207, 249,212, 251,215, 254,220, 256,222, 257,239, 260,240, 264,240, 268,241, 274,242, 277,242, 285,245, 289,240, 300,242, 309,236, 314,235, 313,231')],
            // Ávila
            '5' : [R.path('M199,180, 204,173, 206,169, 204,168, 197,171, 194,164, 189,156, 184,143, 181,144, 173,143, 169,142, 168,156, 160,167, 154,179, 145,182, 142,186, 144,190, 151,195, 158,192, 160,200, 166,200, 170,197, 181,191, 185,194, 189,193, 199,180')],
            // Pontevedra
            '36' : [R.path('M56,58, 51,53, 52,51, 44,51, 28,56, 20,59, 19,65, 17,73, 23,74, 24,78, 17,81, 26,84, 17,90, 15,104, 28,95, 37,93, 43,84, 37,72, 44,67, 50,68, 55,66, 56,58')],
            // Cáceres
            '10' : [R.path('M164,216, 159,216, 156,211, 157,199, 160,198, 158,192, 151,195, 144,190, 142,186, 140,189, 129,187, 124,181, 110,187, 103,191, 97,189, 91,193, 91,198, 96,203, 91,222, 82,222, 70,223, 77,231, 82,243, 91,236, 99,239, 99,246, 117,249, 125,256, 142,251, 157,248, 158,241, 173,239, 164,227, 164,216')],
            // Córdoba
            '14' : [R.path('M172,272, 172,273, 162,276, 148,286, 150,299, 147,302, 149,304, 157,316, 160,323, 157,329, 163,326, 170,324, 177,338, 183,343, 186,347, 197,347, 199,351, 202,348, 204,342, 211,340, 211,340, 204,329, 205,326, 201,321, 201,310, 205,300, 204,293, 201,292, 194,289, 187,282, 177,276, 172,272')],
            // Sevilla
            '41' : [R.path('M166,360, 168,360, 176,354, 176,351, 182,351, 186,347, 186,347, 183,343, 177,338, 170,324, 163,326, 157,329, 160,323, 157,316, 149,304, 147,302, 143,305, 138,300, 135,307, 127,310, 128,319, 119,319, 107,328, 117,328, 119,338, 117,348, 116,363, 119,366, 119,365, 126,367, 135,369, 145,362, 152,363, 166,360')],
            // Huelva
            '21' : [R.path('M119,366, 116,363, 117,348, 119,338, 117,328, 107,328, 119,319, 128,319, 127,310, 123,312, 114,306, 107,306, 99,301, 94,298, 93,298, 93,302, 91,308, 83,309, 80,314, 77,322, 70,333, 75,351, 96,351, 105,358, 117,369, 119,366')],
            // Teruel
            '44' : [R.path('M384,149, 381,148, 374,144, 362,138, 356,134, 349,137, 346,145, 337,147, 335,144, 327,144, 325,146, 320,148, 318,149, 313,152, 309,154, 309,154, 309,155, 310,160, 311,165, 311,172, 310,175, 307,174, 302,183, 316,196, 329,200, 327,205, 328,207, 332,207, 335,207, 338,211, 342,212, 340,208, 344,203, 347,202, 349,200, 352,195, 354,192, 361,187, 362,180, 361,170, 367,164, 373,167, 382,165, 385,162, 385,157, 386,153, 384,149')],
            // Castellón
            '12' : [R.path('M387,170, 382,165, 373,167, 367,164, 361,170, 362,180, 361,187, 354,192, 352,195, 349,200, 347,202, 344,203, 340,208, 342,212, 347,213, 352,216, 361,215, 367,219, 375,207, 381,199, 389,187, 395,177, 387,170')],
            // Valladolid
            '47' : [R.path('M212,114, 211,109, 200,109, 192,109, 184,103, 181,106, 176,100, 172,101, 174,94, 171,88, 171,81, 160,83, 157,87, 160,98, 161,108, 156,112, 162,121, 160,129, 160,139, 173,143, 181,144, 184,143, 184,143, 191,134, 192,127, 208,125, 215,119, 212,114, 212,114')],
            // Palencia
            '34' : [R.path('M171,81, 171,81, 171,88, 174,94, 172,101, 176,100, 181,106, 184,103, 192,109, 200,109, 211,109, 209,104, 216,98, 208,93, 203,87, 200,72, 202,58, 208,56, 204,51, 206,49, 198,42, 191,41, 179,45, 176,52, 177,62, 173,76, 173,77, 171,81, 171,81')],
            // Gipuzkoa
            '20' : [R.path('M285,49, 288,46, 293,39, 295,32, 305,26, 304,24, 300,22, 287,28, 276,26, 275,30, 271,38, 270,45, 279,46, 285,49')],
            // Bizkaia
            '48' : [R.path('M271,38, 275,30, 276,26, 278,27, 276,24, 267,20, 266,23, 259,19, 253,21, 254,25, 243,26, 235,30, 235,35, 247,33, 250,34, 255,34, 256,39, 265,41, 271,41, 271,38')],
            // Barcelona
            '8' : [R.path('M485,111, 477,112, 469,106, 474,100, 474,93, 465,89, 456,88, 458,82, 454,82, 447,82, 443,82, 442,87, 443,91, 441,101, 437,110, 432,108, 432,110, 431,114, 432,118, 432,120, 432,122, 433,122, 435,128, 439,135, 441,139, 443,141, 459,136, 465,128, 474,122, 487,116, 485,111')],
            // Tarragona
            '43' : [R.path('M439,135, 435,128, 433,122, 428,121, 419,125, 414,132, 402,134, 398,134, 394,134, 391,135, 389,136, 387,140, 383,146, 386,153, 385,157, 385,162, 382,165, 387,170, 395,177, 399,172, 403,171, 409,167, 403,162, 414,149, 430,145, 441,139, 439,135')],
            // Cádiz
            '11' : [R.path('M148,385, 153,382, 158,378, 160,373, 160,367, 166,369, 168,366, 168,360, 166,360, 152,363, 145,362, 135,369, 126,367, 119,365, 116,370, 116,378, 122,383, 122,389, 130,401, 137,404, 148,408, 154,403, 159,400, 161,395, 155,385, 148,385')],
            // Jaén
            '23' : [R.path('M274,292, 272,289, 270,285, 266,284, 262,282, 263,281, 256,283, 248,286, 231,286, 217,288, 203,288, 205,300, 201,310, 201,321, 205,326, 204,329, 211,340, 220,340, 222,335, 232,329, 239,331, 245,327, 253,328, 258,324, 261,320, 267,310, 270,305, 275,299, 274,292')],
            // Huesca
            '22' : [R.path('M389,126, 391,123, 392,121, 388,115, 398,105, 401,96, 404,70, 401,61, 392,60, 386,61, 372,59, 364,52, 351,54, 343,47, 339,56, 339,72, 340,75, 343,81, 344,85, 344,90, 343,94, 339,97, 342,98, 347,101, 350,103, 352,107, 354,110, 358,113, 362,117, 365,119, 368,120, 372,130, 379,132, 387,128, 388,128, 389,126, 389,126')],
            // A Coruña
            '15' : [R.path('M54,47, 54,28, 59,19, 62,10, 63,4, 62,1, 55,5, 55,0, 51,2, 44,7, 37,12, 34,14, 39,15, 44,16, 42,26, 35,22, 25,28, 16,28, 0,39, 4,49, 8,55, 15,53, 13,56, 8,63, 7,67, 10,66, 14,63, 16,61, 28,56, 44,51, 52,51, 54,47')],
            // Asturias
            '33' : [R.path('M188,28, 191,23, 193,22, 190,21, 171,17, 163,16, 158,13, 144,11, 139,8, 128,13, 115,12, 100,11, 94,11, 90,14, 84,20, 88,28, 92,34, 97,34, 98,36, 93,39, 98,46, 100,49, 112,49, 113,43, 119,41, 125,42, 128,41, 131,40, 135,42, 138,45, 140,42, 143,40, 147,41, 150,42, 158,38, 169,38, 172,33, 177,31, 180,33, 188,28')],
            // Badajoz
            '6' : [R.path('M170,236, 173,239, 158,241, 157,248, 142,251, 125,256, 117,249, 99,246, 99,239, 91,236, 83,242, 82,243, 87,252, 92,253, 92,263, 81,272, 78,285, 88,300, 94,298, 99,301, 107,306, 114,306, 123,312, 135,307, 138,300, 143,305, 150,299, 148,286, 162,276, 172,273, 175,264, 174,255, 181,247, 182,240, 184,235, 170,236')],
            // Valencia
            '46' : [R.path('M323,255, 329,261, 335,260, 337,269, 345,270, 351,273, 354,270, 351,268, 361,264, 373,264, 370,261, 364,244, 361,233, 367,219, 361,215, 352,216, 347,213, 338,211, 335,207, 331,207, 327,207, 326,211, 325,215, 323,221, 319,222, 313,231, 315,237, 326,241, 323,255')],
            // Alicante
            '3' : [R.path('M381,267, 373,264, 361,264, 351,268, 354,270, 351,273, 345,270, 336,269, 338,274, 336,275, 334,275, 333,283, 330,288, 335,294, 331,304, 338,312, 343,319, 348,310, 348,303, 353,300, 357,288, 370,280, 383,271, 381,267')],
            // Almería
            '4' : [R.path('M300,337, 294,328, 294,315, 287,313, 285,314, 281,317, 279,331, 271,337, 267,348, 260,346, 254,358, 253,373, 263,376, 272,369, 279,368, 287,374, 294,365, 300,355, 308,341, 300,337')],
            // Granada
            '18' : [R.path('M270,305, 267,310, 261,320, 258,324, 253,328, 245,327, 239,331, 232,329, 222,335, 220,340, 211,340, 204,342, 202,348, 199,351, 202,354, 205,361, 221,368, 223,373, 234,375, 243,373, 253,373, 254,358, 260,346, 267,348, 271,337, 279,331, 281,317, 285,314, 281,311, 274,307, 270,305, 270,305')]
        };
    };
}).call(this);
