use irish_folklore;
db.dropDatabase();

db.characters.insertMany([
    {
        region_key: "2345255",
        name: "Leprechaun",
        irish: "leipreachán",
        meaning: "small body",
        earliest_reference: "The earliest known reference to a leprechaun appears in the medieval tale Echtra Fergus mac Léti (Adventure of Fergus son of Léti). In the text Fergus Mac Léti, King of Ulster, falls asleep on the beach and wakes to find himself being dragged into the sea by three lúchorpáin. He captures his abductors, who grant him three wishes in exchange for release.",
        description: ["Leprechauns were originally known as tall fairies that would appear to humans as old men. The leprechaun is said to be a solitary creature, whose principal occupation is making and cobbling shoes, and who enjoys practical jokes."],
        image: "https://ireland-map-pictures.s3.us-east-2.amazonaws.com/lep1.jpg",
        top_trumps_properties: {
            heroism: 3,
            romance: 2,
            magic: 6,
            strength: 1,
            spookiness: 3},
        is_favourite: false
    },
    {   
        region_key: "2345264",
        name: "Finvarra",
        species: "fairy",
        meaning: "fair haired",
        description: ["Finvarra is said to be the King of the Fairies of Connacht and the King of the Daoine Sidhe, a race of deities in Irish mythology, he is also sometimes described as the King of the Dead.", "His home is at Knockmaa in Co Galway, where he is married to the Fairy Queen Una (or Oona). However, he is known for his many affairs with beautiful mortal women. He frequently abducts mortals but also gives generous aid to those he favors."],
        image: "https://ireland-map-pictures.s3.us-east-2.amazonaws.com/Finvarra.jpg",
        is_favourite: false,
        top_trumps_properties: {
            heroism: 6,
            romance: 6,
            magic: 8,
            strength: 5,
            spookiness: 3
        }
    },
    {
        region_key: "2345256",
        name: "Fionn mac Cumhaill",
        irish: "Fionn Mac Cumhaill",
        species: "hunter-warrior",
        meaning: "fair haired",
        description: ["Finn McCool was the son of Cumhall, the leader of the Fianna. He famously (and accidentally) gained all the knowledge in the world. There was a magical salmon in the River Boyne that was said to hold all the knowledge of the earth and Finn was to cook it for the chief poet Finnegus.", "Finn burnt his finger while cooking and instinctively put it in his mouth to cool the burn. As the small piece of burnt salmon entered his mouth, a light flashed and Finn instantly knew all about the past, present, and future."],
        image: "https://ireland-map-pictures.s3.us-east-2.amazonaws.com/FinMaccool.jpg",
        is_favourite: false,
        top_trumps_properties:
        {heroism: 3,
        romance: 8,
        magic: 6,
        strength: 1,
        spookiness: 3}
    },
    {   
        region_key: "2345253",
        name: "Banshee",
        irish: "Bean Sí ",
        description: ["As legend tells it, the banshee would scream when a member of a certain family died, often alerting the family members. If one heard the shriek, they knew one of their family members had passed on. The banshee is said to appear most often as old women in rags but they can also appear as a beautiful young woman, a weasel, a hare, a hooded crow and more."],
        image: "https://ireland-map-pictures.s3.us-east-2.amazonaws.com/Banshee.jpg",
        is_favourite: false,
        top_trumps_properties:
        {heroism: 1,
        romance: 3,
        magic: 3,
        strength: 3,
        spookiness: 9}
    
    
    },
    {   
        region_key: "2345252",
        name: "Fairies",
        irish: "aos sí ",
        description: ["It is said that they live in “cnocs” (hollow hills, in Irish), which are located in the “sidhe”. The “sidhe” are mounds where megalithic monuments are erected in many places on the island. There the fairies are ruled by a king or queen."],
        image:  "https://ireland-map-pictures.s3.us-east-2.amazonaws.com/Fairies.jpg",
        is_favourite: false,
        top_trumps_properties:
        {heroism: 3,
        romance:4 ,
        magic: 6,
        strength: 4,
        spookiness: 5}
    },
    {   
        region_key: "2345251",
        name: "Children of Lir",
        irish: "Oidheadh chloinne Lir",
        description: ["The Children of Lir tells the story of four siblings, three boys and one girl. Their mother died but they still had the love and praise of their father, Lir. Lir remarried a woman named Aoife who quickly grew jealous of the kids and began to plot their murder.", "Lacking the courage to take their lives, Aoife decided to turn the children into swans for 900 years so she could have their loving father all to herself. Lir eventually found out and turned Aoife into an air demon for eternity."],
        image:"https://ireland-map-pictures.s3.us-east-2.amazonaws.com/ChildrenofLir.jpg",
        is_favourite: false,
        top_trumps_properties:
        {heroism: 1,
        romance: 2,
        magic: 7,
        strength: 5,
        spookiness: 7}
    },
    {   
        region_key: "1",
        name: "Dagda's Harp",
        description:["Dagda, the high king of the Tuatha de Danaan, had a beautiful, magical harp which he played for the soldiers, but it was stolen in the chaos of a battle. The captors fled, eventually taking refuge in an abandoned castle, but Dagda and a small group of soldiers secretly followed at a distance.", "Upon arrival, Dagda called out to his harp and it floated back to its rightful owner. Dagda struck the harp three times to ensure his company’s safe escape. The first sound brought tears to everyone’s eyes, the next sparked gut-busting laughter, and the last put their enemy into a deep sleep."],
        image: "https://ireland-map-pictures.s3.us-east-2.amazonaws.com/DagdasHarp.jpg",
        is_favourite: false,
        top_trumps_properties:
        {heroism: 7,
        romance: 7,
        magic: 7,
        strength:6,
        spookiness: 3}
    },
    {   
        region_key: "2",
        name: "Changelings",
        description: ["A changeling was believed to be a fairy child that had been left in place of a human child stolen by the fairies. A changeling is typically identifiable via a number of traits; in Irish legend, a fairy child may appear sickly and won't grow in size like a normal child, and may have notable physical characteristics such as a beard or long teeth.", "They may also display intelligence far beyond their apparent years, as well as possess uncanny insight. A common way that a changeling could identify itself is through displaying unusual behaviour when it thinks it's alone, such as jumping about, dancing or playing an instrument."],
        image: "https://ireland-map-pictures.s3.us-east-2.amazonaws.com/Changeling.jpg",
        is_favourite: false,
        top_trumps_properties:
        {heroism: 2,
        romance: 2,
        magic: 2 ,
        strength:2 ,
        spookiness: 8}
    },
    {   
        region_key: "2345250",
        name: "Pooka",
        irish: "púca",
        description: ["They are one of the most feared mythical beings in Ireland. These are little goblins that usually dress up and go out at night to terrorise people. They always wear a long, wild mane and their eyes are sulphurous. Depending on the area, the pooka can become large furry ogres, huge eagles or black goats with twisted horns. In Downland, in particular, they turn into small, deformed goblins that demand a portion of the harvest from the peasants."],
        image: "https://ireland-map-pictures.s3.us-east-2.amazonaws.com/Pooka.jpg",
        is_favourite: false,
        top_trumps_properties:
        {heroism: 1,
        romance: 1,
        magic: 5 ,
        strength: 6,
        spookiness: 9}
    },
    {   
        region_key: "2345271",
        name: "Macha",
        description: ["Macha was an Irish war goddesss, strongly linked to the land. The most famous part of the Macha legend was the race in which she ran while pregnant. It was said that she went to the house of Cruind, a farmer, and circled on the flagstones outside his house three times before entering the dwelling and embarking on an affair with him.", "Macha became pregnant and later in a conversation with the king of Ulster, Cruind boasted that Macha could outrun any horse. The king demanded to see this put to the test despite the protestations of Macha. She appealed for a delay until she had given birth but the king refused and she was forced to compete. One version of the tale states that she died after the race, giving birth to twins. In her drying pain and anger, she curses the men of Ulster to nine times nine generations, that in their time of worst peril they should suffer the pain of child birth."],
        image: "https://ireland-map-pictures.s3.us-east-2.amazonaws.com/Macha.jpg",
        is_favourite: false,
        top_trumps_properties:
        {heroism: 8,
        romance: 8,
        magic: 8,
        strength: 8,
        spookiness: 5}
    },
    {   
        region_key: "2345266",
        name: "The Pixie in Love",
        description: ["This Irish legend is about a leprechaun named Coll encountering an evil fairy named Aine who had transformed into a beautiful goblin. They spent hours talking, until the empress of malevolent fairies cast a hex on Aine, turning her into a magpie.", "Coll consulted the queen of the good fairies who promised to remove the spell if Coll found her and confessed his love. Eventually, he did, and Aine was restored to her prior form."],
        image: "https://ireland-map-pictures.s3.us-east-2.amazonaws.com/PixieInLove.jpg",
        is_favourite: false,
        top_trumps_properties:
        {heroism: 5,
        romance: 9,
        magic: 8,
        strength: 2,
        spookiness: 4}
    },
    {   
        // region_key: "2345255",
        name: "Dullahan",
        description: ["Through the Irish countryside rode sinister creatures, with their heads in their lap at high speed. They were called Dullahan, and it is said that they lived in the counties of Down and Sligo. Legend has it that when a Dullahan suddenly stopped, someone from the environment died."],
        image: "https://ireland-map-pictures.s3.us-east-2.amazonaws.com/Dullahan.jpg",
        is_favourite: false,
        top_trumps_properties:
        {heroism: 3,
        romance: 3 ,
        magic: 6,
        strength:3,
        spookiness: 10}
    },
    {   
        region_key: "3",
        name: "Cú Chulainn",
        description: ["Cú Chulainn is one of the most famous Irish mythological heroes. He was said to be the son of Deichtine and the god Lugh, and the nephew of Conchobar mac Nessa, the King of Ulster. His given name at birth was Setanta but he gained the name Cú Chulainn, meaning ‘Culann’s Hound’ after he killed a ferocious guard dog belonging to a smith named Culann. Cú Chulainn offered to take the place of the guard dog until a replacement could be reared."],
        image: "https://ireland-map-pictures.s3.us-east-2.amazonaws.com/irish-Legend-of-Cu-Chulainn.jpg",
        is_favourite: false,
        top_trumps_properties:
        {heroism: 9,
        romance: 7,
        magic: 6,
        strength:8 ,
        spookiness: 2}
    },
    {   
        region_key: "4",
        name: "Diarmuid and Gráinne",
        description: ["Grainne was the most beautiful woman in Ireland and the daughter of the High King of Ireland. Grainne was courted by Ireland's most eligible, Princes and Chieftains, including the now ageing chief Fionn MacCool, who wanted the young maid as his second wife. He asked her to marry him, she agreed and a great feast was set up to celebrate the newly engaged couple.", "But on that night Grainne met Diarmuid, one of Fionn's best warriors and it was love at first sight! Grainne was prepared to go to any lengths to get her man and drugged the entire party, apart from Diarmuid. With Diarmuid all to herself, Grainne confessed her love for him, but Diarmuid backed off, as he was loyal to his leader Fionn. But Grainne wasn't taking no for an answer, so she put a spell on him and he fell in love with her.", "The two ran off together, hotly pursued by a very angry Fionn and his men.  All across Ireland the eloping couple ran and all across Ireland there are caves, trees and all kinds of nooks and crannies, under or inside of which, local legend has it that Diarmuid and Grainne, lay together and hid.", "After long years on the run, Grainne fell pregnant with Diarmuid's child, but fate was about to catch up with them. One day out in the wilderness, with Fionn and his men closing in, Diarmuid and Grainne came across the heath of Benbulben in Co. Sligo, where a giant boar confronted them.", "This was bad news for Diarmuid, whom legend had told that the only living creature that could harm him, was a wild boar. As the boar charged, Diarmuid, protecting his heavily pregnant lover, wrestled it to the gound in a fight to the death. The warrior killed the boar with his sword, but not before the boar had gored Diarmuid, fatally wounding him.", "As Fionn and his men came upon their long sought quarry, he found Diarmuid dying in a heavily pregnant Grainne's arms. A despairing Grainne knew she had just one chance to save her lover. She implored Fionn to show mercy and save his former friend by curing Diarmuid with a drink of water cupped by his magical hands.", "But Fionn refused, still hurt that his best friend had eloped with his betrothed. With Diarmuid dying, Fionn's men begged him to help this once great warrior to live. But still Fionn refused. It was only when Fionn's son Oisin challenged his father and threatened to kill him that Fionn agreed to help Diarmuid. But it was too late, before Fionn had got the water, Diarmuid had died."],
        image: "https://ireland-map-pictures.s3.us-east-2.amazonaws.com/DiarmuidGrainne.jpg",
        is_favourite: false,
        top_trumps_properties:
        {heroism: 9,
        romance: 10,
        magic: 2,
        strength:10,
        spookiness: 1}
    },
    {   
        region_key: "5",
        name: "Morrigan",
        description: ["She was a shape-shifter and frequently appeared as a black crow, an ominous sign for those who saw her prior to battle. The most famous tales of the Morrigan always center around Cuchulainn at the time he defended Ulster from the army of Connaught, led by Queen Maeve. This famous battle raged for months and cost countless lives.", "By invoking the right of single combat Cuchulainn was able to defeat warrior after warrior. It is at this point that the Morrigan attempted to seduce Cuchulainn, offering herself to him before battle. But Cuchulainn refused Morrigan, despite her great beauty. The Morrigan was outraged and used her shape-shifting powers to transform into an eel, tripping Cuchulainn as he traversed a fjord.", "The hero recovered though and lashed out at the eel, breaking its ribs. She then transformed into a wolf, scaring cattle and driving them towards Cuchulainn who responded with a sling-shot, blinding the Morrigan in one eye. Once again the Morrigan transformed! This time she changed into a heifer leading the stampede towards Cuchulainn. But once again the famed prowess of the greatest mythic figure in Irish history thwarted her evil ambition.", "He fired away another slingshot, breaking her leg forcing the Morrigan into a humbling retreat. One that she would never forget. After his victory in battle Cuchulainn traveled from the battle-site where he encountered an old woman milking a cow. Again the Morrigan had transformed.", "The haggard woman was blind in one eye, with damaged ribs and a broken leg but despite having inflicted these wounds Cuchulainn did not recognize her new form. She tricked him by giving him three sips of milk.", "He blessed her on every occasion and when each had been taken the wounds inflicted on the Morrigan were healed. By Cuchulainn's own blessings! The Morrigan would again appear before Cuchulainn shortly before his death.", "On his way to yet another battle he met a woman washing bloody armor, a sure and terrible portent of impending doom. Sure enough Cuchulainn was finally conquered. Despite being mortally wounded he tied himself to a boulder with his own innards, in the hope that his upright appearance would continue to terrify his enemies.", "It is only when a black crow finally landed on his shoulder that his death was finally revealed."],
        image: "https://ireland-map-pictures.s3.us-east-2.amazonaws.com/Morrgian.jpg",
        is_favourite: false,
        top_trumps_properties:
        {heroism: 8,
        romance: 5,
        magic: 9,
        strength: 8,
        spookiness: 9}
    },
    {   
        region_key: "6",
        name: "Tír na nÓg",
        description: ["The land of Tir na nOg is the realm of the Otherworld, the place where the Fae lived and heroes visited on quests. It was a place just outside the realm of man, off to the west, where there was no illness or death or time, but only happiness and beauty. It is important to note that Tir na nOg was not so much an “afterlife” as it was a an earthly place, a land of eternal youth, that could only be reached by way of magic.", "In many of the Celtic legends, Tir na nOg plays an important role in the forming of both heroes and mystics. The very name, Tir na nOg, means the 'land of youth' in the Irish language."],
        image: "https://ireland-map-pictures.s3.us-east-2.amazonaws.com/TirNaOg.jpg",
        is_favourite: false,
        top_trumps_properties:
        {heroism: 1,
        romance: 10,
        magic:8,
        strength:1,
        spookiness: 1}
    },
    {   
        region_key: "7",
        name: "Giant's Causeway",
        description: ["As legend has it, Northern Ireland was once home to a giant named Finn McCool (also called Fionn Mac Cumhaill). When another giant – Benandonner, across the Irish Sea in Scotland – threatened Ireland, Finn retaliated by tearing up great chunks of the Antrim coastline and hurling them into the sea."],
        image: "https://ireland-map-pictures.s3.us-east-2.amazonaws.com/GiantsCauseway.jpg",
        is_favourite: false,
        top_trumps_properties:
        {heroism: 9,
        romance: 6,
        magic: 2,
        strength: 10,
        spookiness: 1}
    },
    {   
        region_key: "2345263",
        name: "Abhartach",
        description: ["Folklore tells us Abhartach lived, and importantly for the story, died in the 5th or 6th century C.E. Accounts vary, some say he was deformed, some say he was a dwarf, but all agree he was a powerful and evil magician. He was a possessive and jealous man and suspecting his wife of having an affair her designed to climb outside her bedroom window to catch her in the act.", "However he slipped and fell to his death. He was buried in a manner befitting a chieftain; standing upright. Yet the following day, come dusk Abhartach had returned, demanding each of his subjects let blood from their wrists into a bowl for him to drink.", "He instructed that this gruesome meal be prepared for him daily, and terrified of his evil the people fed him their blood, sustaining his unnatural life as one of the marbh bheo; the living dead. Soon his subjects grew weary of living in fear but none amongst them were brave enough to attempt an assassination and so they asked the warrior chieftain Cathán (now O’Kane) to slay Abhartach for them."],
        image: "https://ireland-map-pictures.s3.us-east-2.amazonaws.com/Abhartach.jpg",
        is_favourite: false,
        top_trumps_properties:
        {heroism: 1,
        romance: 1,
        magic: 6,
        strength:5,
        spookiness: 9}
    },
    {   
        region_key: "2345265",
        name: "Death of Cú Chulainn",
        description: ["Cuchulainn, mortally wounded, had only enough strength in him to crawl to a nearby lake for a drink of water. ... Cuchulainn laughed, and died with the laugh in his mouth. For three days after he died, he stood tied to the rock, and none of his enemies were brave enough to approach, and make sure he was dead."],
        image: "https://ireland-map-pictures.s3.us-east-2.amazonaws.com/DeathofCuChullain.jpg",
        is_favourite: false,
        top_trumps_properties:
        {heroism: 9,
        romance:7 ,
        magic: 5,
        strength: 8,
        spookiness: 3}
    },
    {   
        region_key: "2345267",
        name: "Tuatha dé Danann",
        description: ["In ancient Ireland, there were more than a few races that existed. Among them was the Tuatha de Danann. The Tuatha de Danann was a magical race that possessed supernatural powers. Most of them were god-like creatures or divine beings that were being worshipped. This race was also known to believe in Goddess Danu.", "She was sometimes referred to as the mother. The Tuatha de Danann settled in four major cities; Falias, Gorias, Finias, and Murias."],
        image: "https://ireland-map-pictures.s3.us-east-2.amazonaws.com/Tuatha.jpg",
        is_favourite: false,
        top_trumps_properties:
        {heroism: 1 ,
        romance: 5,
        magic: 7,
        strength: 5,
        spookiness: 3}
    },
    {   
        region_key: "2345272",
        name: "Amadán Dubh",
        description: ["Amadán Dubh, also known as the 'Dark Fool' or 'Fairy Fool', is a trickster fairy found in Irish folklore, and is the 'bringer of madness and oblivion.' It is also said that Amadán Dubh 'haunts the hills after sunset playing reed pipes to work his magic."],
        image: "https://ireland-map-pictures.s3.us-east-2.amazonaws.com/AmadanDubh.jpg",
        is_favourite: false,
        top_trumps_properties:
        {heroism: 1,
        romance: 2,
        magic: 5,
        strength:2 ,
        spookiness: 7}
    },
    {   
        region_key: "2345273",
        name: "Sluagh",
        description: ["In Irish and Scottish folklore, the Sluagh were the spirits of the restless dead. Sometimes they were seen as sinners, or generally evil people who were welcome in neither heaven nor hell, nor in the Otherworld, who had also been rejected by the Celtic deities and by the earth itself."],
        image: "https://ireland-map-pictures.s3.us-east-2.amazonaws.com/Sluagh.jpg",
        is_favourite: false,
        top_trumps_properties:
        {heroism: 1,
        romance: 1,
        magic: 3,
        strength: 1,
        spookiness: 8}
    },
    {   
        region_key: "2345249",
        name: "Lord of Lust, Gan Ceanach",
        description: ["There are many types of fairy in Ireland, some more risky than others, and some to be avoided due to their habits rather than out of any particular malevolence. Such a one is the Gan Ceanach, whose name means “Without Love”.", "Although you might think such a title would indicate a friendless creature of a lonely nature lacking in social graces of poor prospects and uncertain personal hygiene, nothing could be further from the truth! The Gan Ceanach is the Casanova of the Sidhe, a breaker of hearts and infamous libertine.", "In truth he is, like many Sidhe, diminutive in stature although well groomed at all times and dressed in the latest fashions, although he can take the shape of any man he pleases, and can set a lady's heart a-flutter with murmured sweet nothings in his deep husky voice, like rich velvet."],
        image: "https://ireland-map-pictures.s3.us-east-2.amazonaws.com/LordofLust.jpg",
        is_favourite: false,
        top_trumps_properties:
        {heroism: 2,
        romance: 9,
        magic: 8,
        strength:5,
        spookiness: 2}
    },
    {   
        region_key: "2345274",
        name: "Niamh and Oisin",
        description: ["As Oisin sat by the shore one day he was noticed from across the sea by Niamh Chinn Óir, Niamh of the golden Hair, fairy queen of Tir na n'Og, She thought him to be the most handsome man she had ever seen and wanted him to be her lover. She rode across the sea on her white horse and stopped and spoke to Oisin.", "She told him of her wonderful land, where no one ages or is ill, there is no hunger or war, the weather is always warm, flowers always bloom and everyone is happy. Niamh asked him to go with her to Tir na n'Og and live with her. By morning he had decided to go with Niamh and they rode off across the waves to Tir na n'Og.", "Life there was idyllic, just as Niamh had told him, they married and had two sons and a daughter. Three hundred mortal years had passed unbeknown to Oisin, to whom it seemed just a few in this enchanted land, but he yearned to see his old friends with the Fianna.", "He told Niamh and asked if it would be possible to return for a visit, She explained how the time was different there and that everyone he knew would be long gone, but Oisin was determined to see for himself and reluctantly Niamh sent him off on the white horse, with the instructions to stay on the horse no matter what, or he would be unable to return to Tir na n'Og.", "So, off he set across the waves and landed near the Hill of Allen, but nothing looked familiar, the forests were gone and the hill overgrown, he knew then that Niamh was right and sadly he turned to ride back to her.", "On his way, he came across a group of men trying to raise a stone, he asked them where he could find Finn and the Fianna and they told him that these were just stories told by their grandfathers with no truth in them. This saddened Oisin but he was much stronger than the men and offered to help them lift the stone, as he reached down to do so, he fell from the horse and instantly all the lost years caught up with him and he aged instantly.", "The men could not believe what they saw and sent for St Patrick."],
        image: "https://ireland-map-pictures.s3.us-east-2.amazonaws.com/NiamandOisin.jpg",
        is_favourite: false,
        top_trumps_properties:
        {heroism: 4,
        romance: 8,
        magic: 7,
        strength:5,
        spookiness: 1}
    },
    {   
        region_key: "2345257",
        name: "St. Patrick and the Snakes",
        description: ["According to legend, the patron saint of Ireland chased all the snakes in Ireland into the sea after they began attacking him during a 40-day fast he undertook on top of a hill."],
        image: "https://ireland-map-pictures.s3.us-east-2.amazonaws.com/StPatrick.jpg",
        is_favourite: false,
        top_trumps_properties:
        {heroism: 7,
        romance: 6,
        magic: 7,
        strength: 7,
        spookiness: 4}
    },
    {   
        region_key: "2345258",
        name: "Cattle Raid of Cooley",
        description: ["The story begins with Queen Medb and an argument with her husband over who was wealthier. Each had their servants pile up their riches in two piles side-by-side. It became immediately evident that the one thing Medb’s husband had that she didn’t was a champion bull.", "Medb knew of only one bull in Ireland that would help her pip her husband. That very day she sent a servant to meet the owner and offer him great riches in exchange for a loan of the bull. He was about to agree when he overheard one of Medb’s servants state that they’d have stolen the bull if the man turned them down. He was infuriated and he denied Medb’s request.", "Medb was enraged and a battle began. However, this was no ordinary battle, oh no – on one side, there was Medb and hundreds of men. On the other, there was a young boy named Cu Chulainn."],
        image: "https://ireland-map-pictures.s3.us-east-2.amazonaws.com/CattleRaid.jpg",
        is_favourite: false,
        top_trumps_properties:
        {heroism: 8,
        romance:2,
        magic:1,
        strength: 8,
        spookiness: 1}
    },
    {   
        region_key: "2345260",
        name: "Fairy Forts",
        description: ["The structures usually make up the shape of a raised circle which is indented with bushes and trees. It has been said down through the annals of Irish history that fairy forts are places where all sorts of mysterious happenings take place. Faeries, leprechauns, and all sorts of spirits from the “other world” are said to reside in these forts and if someone is foolish enough to disturb these hallowed shrines well then there will be hell to pay with the spirits reeking all sorts of revenge upon their hapless victims."],
        image: "https://ireland-map-pictures.s3.us-east-2.amazonaws.com/Fairyforts.jpg",
        is_favourite: false,
        top_trumps_properties:
        {heroism: 1,
        romance: 8,
        magic: 9,
        strength: 1,
        spookiness: 5}
    },
    {   
        region_key: "2345270",
        name: "Rock of the Candle",
        description: ["Close by where Limerick city stands today lie the ruins of an ancient and once mighty fortress called Carrigogunnel, which commanded all the lands about with a stern hand. It was known then as a place of ill omen, and it is known today as the same, for it was once the home of an uncanny hag by the name of Gráinne.", "Amid the surrounding marshes and binding briar she dwelt on her rock, enormous in size and frightful of countenance, with greenish skin and long hooked fingers ending in iron talons, a nose as bent as a blackthorn tree and almost as long, hair like pond weeds hanging lank and bristles upon her chin. Most unsavoury of all were her black and glistening eyes, for it was said they could see times to come and help her hatch schemes to cause misery.", "There wasn't much this old hag loved, but what she did love above all other things was to cause death untimely. She had in her hovel a candle she had made from the whispered lies of spiders and midnight oozings, a twisted thing of woven hair from a drowned banshee and rushes from a ditch over which a Pooka had leaped three times, set in the misty breath of old fairy mounds on Samhain night cupped in the skull of a man betrayed by his kin.", "She didn't think it hard work or any difficulty at all to put that candle atop her rock every night when she knew someone was coming along the road below, and should they chance to glance up and see her candle, death would come for them before the morning sun rose!"],
        image: "https://ireland-map-pictures.s3.us-east-2.amazonaws.com/RockCandle.jpg",
        is_favourite: false,
        top_trumps_properties:
        {heroism: 1,
        romance:3,
        magic: 7,
        strength:3,
        spookiness: 6}
    },
    {   
        region_key: "2345261",
        name: "Hostel of the Quicken Trees",
        description: ["Bruidhean Chaorthainn (“Fairy Palace of the Quicken Trees” or “Hostel of the Rowan Trees”) was a common tale in Irish myth, where the hero is trapped in a fairy palace or hostel, and another hero has to free them through various adventures."],
        image: "https://ireland-map-pictures.s3.us-east-2.amazonaws.com/Quickentrees.jpg",
        is_favourite: false,
        top_trumps_properties:
        {heroism: 6,
        romance:6,
        magic: 5,
        strength: 5,
        spookiness: 3}
    },
    {   
        region_key: "9",
        name: "Hunt of Slieve Cuilinn",
        description: ["In the tale known as The Hunt of Slieve Gullion, Áine and her sister Milucra both seek after the legendary hero Fionn mac Cumhaill (Finn McCool). Knowing that Áine vowed never to marry a man with grey hair, Milucra secretly puts a spell on the lake atop Slieve Gullion, so that anyone who swam in it would become elderly.", "She tricks Fionn by asking him to fetch her golden ring from the lake, and he emerges as an old man with grey-white hair. His men, the Fianna, force her to give him a restorative potion from her cornucopia. Fionn's youth returns, but his hair does not return to its true colour."],
        image: "https://ireland-map-pictures.s3.us-east-2.amazonaws.com/Slieve.jpg",
        is_favourite: false,
        top_trumps_properties:
        {heroism:3,
        romance:5,
        magic:6,
        strength:1,
        spookiness: 3}
    },
    {   
        region_key: "2345268",
        name: "Ethne Leaves the Fairies",
        description: ["After Angus Óg and his people had retreated behind the veil of the Otherworld, the steward of his palace had a daughter born to him whose name was Ethne. One day Ethne took off her clothes by the riverside, and then she had mislaid her fairy amulet, and turned into a mortal maid!", "Her companions were as invisible to her as they are to us, and the world was strange to her. The fairy track that had led to the riverside was overgrown with briars, the palace of Angus was nothing but a wooded hill!"],
        image:"https://ireland-map-pictures.s3.us-east-2.amazonaws.com/EthneLeaves.jpg",
        is_favourite: false,
        top_trumps_properties:
        {heroism: 1,
        romance: 5,
        magic: 5,
        strength: 1,
        spookiness: 4}
    },
    {   
        region_key: "2345269",
        name: "Angus Og",
        description: ["In Irish mythology, Aengus or Óengus, also called Mac ind Óic, is one of the Tuatha Dé Danann and probably originally a god associated with youth, love, summer and poetic inspiration.", "The son of The Dagda and Boann, Aengus is also known as Maccan Óc ('the young boy' or 'young son'), and corresponds to the Welsh mythical figure Mabon and the Celtic god Maponos.[1] He plays a central role in five myths reported by medieval Irish texts."],
        image: "https://ireland-map-pictures.s3.us-east-2.amazonaws.com/AngusOg.jpg",
        is_favourite: false,
        top_trumps_properties:
        {heroism: 8,
        romance: 8,
        magic: 6,
        strength:7,
        spookiness: 1}
    },
    {   
        region_key: "2345259",
        name: "Madness of Suibhne",
        description: ["The Madness of Suibhne or Suibhne's Frenzy) is an old Irish tale about the Suibhne mac Colmáin, king of the Dál nAraidi, driven insane by the curse of Saint Rónán Finn. The insanity makes Suibhne leave the Battle of Mag Rath, enter a life of wandering (which earns him the nickname Suibne Geilt or 'Suibhne the Madman'), until he dies under the refuge of St. Moling."],
        image: "https://ireland-map-pictures.s3.us-east-2.amazonaws.com/MadnessofSuibhne.jpg",
        is_favourite: false,
        top_trumps_properties:
        {heroism: 1,
        romance: 1,
        magic: 6,
        strength: 1,
        spookiness: 7}
    },
    {
        region_key: "2345262",
        name: "Balor of the Evil Eye",
        description: ["Son of a god and husband of a prophetess, Balor was a giant with a singular, poisonous eye on his forehead that unleashed a fiery devastation when opened. Lured from his stronghold on Tory Island, Donegal, Balor was blinded in battle and mistakenly burned his own army to the ground. A huge hole was seared into the earth and later, filled with water, becoming Sligo’s Loch na Súil: the Lake of the Eye."],
        image: "https://ireland-map-pictures.s3.us-east-2.amazonaws.com/BalorEvilEye.jpg",
        top_trumps_properties:
        {heroism: 1,
        romance: 1,
        magic: 5,
        strength: 7,
        spookiness: 6}
        
    },
    {
        region_key: "15",
        name: "Conchobar Mac Nessa",
        description: ["Born on Christmas Day, Conchobar was destined for infamy from the start. He married several daughters of the High King of Ulster, including Medb, one of Ireland’s most feared and ferocious figures. In his old age, he also married Deirdre of the Sorrows (which didn’t make her any happier). Often at war with kings of Ireland’s other provinces, Conchobar met a fitting and spectacular death: killed by the petrified brain of a rival, fired from a slingshot."],
        image: "https://ireland-map-pictures.s3.us-east-2.amazonaws.com/Conchobar.jpg",
        top_trumps_properties:
        {heroism: 5,
        romance: 5,
        magic: 1,
        strength: 7,
        spookiness: 6}

    } 
]) 