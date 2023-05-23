//Аня

const infoCities = `[{
    "header": "Токио",
    "country": "Япония",
    "language": "Японский",
    "populationDensity": "6400,9 чел./км",
    "sights": "Район Синдзюку, Сибуя, Остров Одайба, Токийская башня, Храм Сэнсо-дзи, район Акихабара",
    "funFacts": "Токио, являясь одной из самых больших городских агломераций на Земле, считается самым безопасным городом в мире"
}, {
    "header": "Дели",
    "country": "Индия",
    "language": "Хинди, английский, панджаби и урду",
    "populationDensity": "11297 чел./км²",
    "sights": "Минар Кутуб, Пурана Куила, Форт Салимгарх, Храм Акшардхам, Гробница Хумаюна",
    "funFacts": "В Дели находится 60000 памятников мировой значимости, построенных более чем несколько тысячелетий тому назад."
}, {
    "header": "Шанхай",
    "country": "Китай",
    "language": "Китайский",
    "populationDensity": "3809.57 чел./км²",
    "sights": "Большой шанхайский театр, район Пудун, телебашня Восточная жемчужина, небоскрёбы Башня Цзиньмао, Нанкинская улица",
    "funFacts": "Шанхай является крупнейшим финансовым центром Китая, и одним из ведущих — в Восточной Азии и мире (после Нью-Йорка, Лондона и Токио)."
},
{
    "header": "Сан-Паулу",
    "country": "Бразилия",
    "language": "Португальский",
    "populationDensity": "7216,3 чел./км²",
    "sights": "Кафедральный собор, Музей искусств, Петропавловский собор, Храм Соломона, Городской театр.",
    "funFacts": "Девиз на гербе города переводится с латинского как: «Не мной управляют, а я управляю»"
},
{
    "header": "Мехико",
    "country": "Мексика",
    "language": "Испанский",
    "populationDensity": "5416 чел./км²",
    "sights": "Парк Чапультепек, Национальный исторический музей, район Поланко, Национальный кафедральный собор, площадь Сокало",
    "funFacts": "Мехико был основан индейцами-ацтеками в 1325 году."
},
{
    "header": "Каир",
    "country": "Египет",
    "language": "Египетский арабский",
    "populationDensity": "16239 чел./км²",
    "sights": " Большой Египетский музей, египетские пирамиды, Мечеть Ибн Тулун, Мечеть Мухаммада Али в каирской Цитадели, Станция метро "Мар-Гиргис",
    "funFacts": "В настоящее время городская застройка подошла вплотную к плато Гиза — ближайший дом находится всего лишь в 200 метрах от сфинкса."
},
{
    "header": "Дакка",
    "country": "Бангладеш",
    "language": "Бенгальский",
    "populationDensity": "8543 чел./км²",
    "sights": "Форт Лалбах, Дворец бенгальских навабов, Мечеть Звезды, Дакешвари, Мавзолей трёх лидеров",
    "funFacts": "основанный в VII веке, город Дакка был столицей исторического государства Бенгалии (1608—1717), и стал столицей Бангладеша с 1971 года."
},
{
    "header": "Мумбаи",
    "country": "Индия",
    "language": "Маратхи, хинди",
    "populationDensity": "20694 чел./км²",
    "sights": "Вокзал Чхатрапати-Шиваджи, Ворота в Индию, Джама-Масджид, бюст трёхликого Шивы, Мечеть Хаджи Али",
    "funFacts": "Через пассажирский терминал Мумбаи проходит около половины пассажирского потока всей Индии."
},
{
    "header": "Пекин",
    "country": "Китай",
    "language": "Китайский",
    "populationDensity": "1291,89 чел./км²",
    "sights": "Площадь Тяньаньмэнь, Запретный Город, Национальный музей Китая, Мавзолей Мао Цзэдуна, Улица Люличан",
    "funFacts": "Пекин входит в число четырёх древних столиц Китая."
},
{
    "header": "Осака",
    "country": "Япония",
    "language": "Японский",
    "populationDensity": "12042,52 чел./км²",
    "sights": "Замок в Осаке, Национальный музей искусств, Национальный театр бунраку, Иссин-дзи, Ситэнно-дзи",
    "funFacts": "Осака, являясь третьим по населению городом Японии, считается третьим по безопасности городом на Земле (после Токио и Сингапура)."
}
]`