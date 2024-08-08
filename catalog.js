const catalogData = [
    {
        "category": "vegetables",
        "products": [
            {
                "name": "Potato (आलू)",
                "description": "Fresh potatoes, 1/2 kg.",
                "price": 25,
                "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/app/assets/products/sliding_images/jpeg/c77efb4a-8ce1-417e-a45f-7764f404acad.jpg?ts=1711473371"
            },
            {
                "name": "Tomato (टमाटर)",
                "description": "Juicy tomatoes, 1/2 kg.",
                "price": 22,
                "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/app/assets/products/sliding_images/jpeg/f61f5d13-49be-4d70-b083-b4822fb609c3.jpg?ts=1717305373"
            },
            {
                "name": "Onion (प्याज)",
                "description": "Crisp onions, 1/2 kg.",
                "price": 30,
                "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/app/assets/products/sliding_images/jpeg/fc97e36f-ae48-4261-99d7-718cb9b2f5e6.jpg?ts=1711010248"
            },
            {
                "name": "Cauliflower (फूलगोभी)",
                "description": "Fresh cauliflower, 1/2 kg.",
                "price": 60,
                "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/app/assets/products/sliding_images/jpeg/5c732219-a883-403d-90f3-9594b620f2f2.jpg?ts=1713868642"
            },
            {
                "name": "Spinach (पालक)",
                "description": "Green spinach, 1/2 kg.",
                "price": 1.89,
                "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/app/assets/products/sliding_images/jpeg/82da095c-a26b-4c23-b745-a3f4679d80c2.jpg?ts=1711808798"
            },
            {
                "name": "Carrot (गाजर)",
                "description": "Fresh carrots, 1/2 kg.",
                "price": 30,
                "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/app/images/products/sliding_image/327916a.jpg?ts=1690813169"
            },
            {
                "name": "Peas (मटर)",
                "description": "Green peas, 1/2 kg.",
                "price": 115,
                "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/app/assets/products/sliding_images/jpeg/78b2ad59-e240-4a53-8e9d-10d0fbebf575.jpg?ts=1723098387"
            },
            {
                "name": "Brinjal (बैंगन)",
                "description": "Fresh brinjal, 1/2 kg.",
                "price": 2.99,
                "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/app/assets/products/sliding_images/jpeg/32682b7f-59b0-4cf8-a5db-6abafddb6d71.jpg?ts=1711440872"
            },
            {
                "name": "Pumpkin (कद्दू)",
                "description": "Fresh pumpkin, 1/2 kg.",
                "price": 2.49,
                "image": "https://example.com/pumpkin.jpg"
            },
            {
                "name": "Bitter Gourd (करेला)",
                "description": "Bitter gourd, 1/2 kg.",
                "price": 3.29,
                "image": "https://example.com/bitter_gourd.jpg"
            },
            {
                "name": "Bottle Gourd (लौकी)",
                "description": "Fresh bottle gourd, 1/2 kg.",
                "price": 2.59,
                "image": "https://example.com/bottle_gourd.jpg"
            },
            {
                "name": "Ladies Finger (Okra) (भिंडी)",
                "description": "Tender okra, 1/2 kg.",
                "price": 3.19,
                "image": "https://example.com/okra.jpg"
            },
            {
                "name": "Green Chili (हरी मिर्च)",
                "description": "Spicy green chilies, 1/2 kg.",
                "price": 3.49,
                "image": "https://example.com/green_chili.jpg"
            },
            {
                "name": "Radish (मूली)",
                "description": "Crunchy radish, 1/2 kg.",
                "price": 1.99,
                "image": "https://example.com/radish.jpg"
            },
            {
                "name": "Beetroot (चुकंदर)",
                "description": "Sweet beetroot, 1/2 kg.",
                "price": 2.79,
                "image": "https://example.com/beetroot.jpg"
            },
            {
                "name": "Fenugreek Leaves (मेथी)",
                "description": "Fresh fenugreek leaves, 1/2 kg.",
                "price": 2.49,
                "image": "https://example.com/fenugreek_leaves.jpg"
            },
            {
                "name": "Coriander Leaves (धनिया)",
                "description": "Fresh coriander leaves, 1/2 kg.",
                "price": 1.89,
                "image": "https://example.com/coriander_leaves.jpg"
            },
            {
                "name": "Mint Leaves (पुदीना)",
                "description": "Fresh mint leaves, 1/2 kg.",
                "price": 2.99,
                "image": "https://example.com/mint_leaves.jpg"
            },
            {
                "name": "Ash Gourd (पेठा)",
                "description": "Fresh ash gourd, 1/2 kg.",
                "price": 2.39,
                "image": "https://example.com/ash_gourd.jpg"
            },
            {
                "name": "Yam (शाहबलूत)",
                "description": "Tender yam, 1/2 kg.",
                "price": 3.29,
                "image": "https://example.com/yam.jpg"
            },
            {
                "name": "Colocasia (Taro) (अरवी)",
                "description": "Fresh taro, 1/2 kg.",
                "price": 2.89,
                "image": "https://example.com/colocasia.jpg"
            },
            {
                "name": "Snake Gourd (चिचिंडा)",
                "description": "Fresh snake gourd, 1/2 kg.",
                "price": 2.99,
                "image": "https://example.com/snake_gourd.jpg"
            },
            {
                "name": "Mustard Greens (सरसों का साग)",
                "description": "Fresh mustard greens, 1/2 kg.",
                "price": 2.49,
                "image": "https://example.com/mustard_greens.jpg"
            },
            {
                "name": "Drumstick (सहजन)",
                "description": "Fresh drumstick, 1/2 kg.",
                "price": 3.19,
                "image": "https://example.com/drumstick.jpg"
            },
            {
                "name": "Green Beans (हरी फली)",
                "description": "Fresh green beans, 1/2 kg.",
                "price": 3.49,
                "image": "https://example.com/green_beans.jpg"
            },
            {
                "name": "Ridge Gourd (टिंडा)",
                "description": "Fresh ridge gourd, 1/2 kg.",
                "price": 2.59,
                "image": "https://example.com/ridge_gourd.jpg"
            },
            {
                "name": "Kohlrabi (शलोट)",
                "description": "Fresh kohlrabi, 1/2 kg.",
                "price": 3.29,
                "image": "https://example.com/kohlrabi.jpg"
            },
            {
                "name": "Celery (अजवाइन के पत्ते)",
                "description": "Fresh celery, 1/2 kg.",
                "price": 2.99,
                "image": "https://example.com/celery.jpg"
            },
            {
                "name": "Cucumber (ककड़ी)",
                "description": "Crisp cucumber, 1/2 kg.",
                "price": 2.19,
                "image": "https://example.com/cucumber.jpg"
            },
            {
                "name": "Green Bell Pepper (हरी शिमला मिर्च)",
                "description": "Fresh green bell pepper, 1/2 kg.",
                "price": 3.29,
                "image": "https://example.com/green_bell_pepper.jpg"
            },
            {
                "name": "Red Bell Pepper (लाल शिमला मिर्च)",
                "description": "Fresh red bell pepper, 1/2 kg.",
                "price": 3.49,
                "image": "https://example.com/red_bell_pepper.jpg"
            },
            {
                "name": "Chayote (Chow Chow) (चकूट)",
                "description": "Fresh chayote, 1/2 kg.",
                "price": 2.79,
                "image": "https://example.com/chayote.jpg"
            },
            {
                "name": "Gourd (तुरई)",
                "description": "Fresh gourd, 1/2 kg.",
                "price": 2.49,
                "image": "https://example.com/gourd.jpg"
            },
            {
                "name": "Arugula (रॉकेट साग)",
                "description": "Fresh arugula, 1/2 kg.",
                "price": 3.19,
                "image": "https://example.com/arugula.jpg"
            },
            {
                "name": "Sorghum (Jowar) (ज्वार)",
                "description": "Fresh sorghum, 1/2 kg.",
                "price": 3.49,
                "image": "https://example.com/sorghum.jpg"
            },
            {
                "name": "Lettuce (लेट्यूस)",
                "description": "Crisp lettuce, 1/2 kg.",
                "price": 2.99,
                "image": "https://example.com/lettuce.jpg"
            },
            {
                "name": "Fennel (सौंफ)",
                "description": "Fresh fennel, 1/2 kg.",
                "price": 3.29,
                "image": "https://example.com/fennel.jpg"
            },
            {
                "name": "Zucchini (जुकिनी)",
                "description": "Fresh zucchini, 1/2 kg.",
                "price": 2.99,
                "image": "https://example.com/zucchini.jpg"
            },
            {
                "name": "Chili Pepper (मिर्च)",
                "description": "Hot chili peppers, 1/2 kg.",
                "price": 3.49,
                "image": "https://example.com/chili_pepper.jpg"
            },
            {
                "name": "Sweet Corn (मीठे मकई)",
                "description": "Sweet corn, 1/2 kg.",
                "price": 2.79,
                "image": "https://example.com/sweet_corn.jpg"
            },
            {
                "name": "Papaya (पपीता)",
                "description": "Fresh papaya, 1/2 kg.",
                "price": 3.49,
                "image": "https://example.com/papaya.jpg"
            },
            {
                "name": "Squash (स्क्वैश)",
                "description": "Fresh squash, 1/2 kg.",
                "price": 2.59,
                "image": "https://example.com/squash.jpg"
            },
            {
                "name": "Taro Root (अरवी)",
                "description": "Fresh taro root, 1/2 kg.",
                "price": 3.29,
                "image": "https://example.com/taro_root.jpg"
            },
            {
                "name": "Water Spinach (कंगकांग)",
                "description": "Fresh water spinach, 1/2 kg.",
                "price": 2.99,
                "image": "https://example.com/water_spinach.jpg"
            },
            {
                "name": "Mushroom (मशरूम)",
                "description": "Fresh mushrooms, 1/2 kg.",
                "price": 4.29,
                "image": "https://example.com/mushroom.jpg"
            },
            {
                "name": "Coriander (धनिया)",
                "description": "Fresh coriander, 1/2 kg.",
                "price": 1.89,
                "image": "https://example.com/coriander.jpg"
            },
            {
                "name": "Sweet Potato (शकरकंद)",
                "description": "Sweet potatoes, 1/2 kg.",
                "price": 3.19,
                "image": "https://example.com/sweet_potato.jpg"
            }
        ]
    },
    
        {
            "category": "grocery",
            "products": [

                {
                    "name": "Wheat Flour (आटा)",
                    "description": "Loose wheat flour, 250 gms.",
                    "price": 30,
                    "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/app/assets/products/sliding_images/jpeg/f6a2d887-f153-4c78-a552-b53995f493b9.jpg?ts=1719646449"
                },
                {
                    "name": "Rice (चावल)",
                    "description": "Loose rice, 250 gms.",
                    "price": 70,
                    "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/app/assets/products/sliding_images/jpeg/9da7e53e-c676-4bca-83dd-c1c1ebc78b27.jpg?ts=1712665428"
                },
                {
                    "name": "Sugar (चीनी)",
                    "description": "Loose sugar, 250 gms.",
                    "price": 50,
                    "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/app/assets/products/sliding_images/jpeg/5c044aca-92d5-4bfc-a1c5-a688db25a316.jpg?ts=1718106537"
                },
                {
                    "name": "Salt (नमक)",
                    "description": "Loose salt, 250 gms.",
                    "price": 25,
                    "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/app/assets/products/sliding_images/jpeg/065d495e-c12d-4c8f-a779-bdbc85041d04.jpg?ts=1707312312"
                },
                {
                    "name": "Tea (चाय)",
                    "description": "Packaged tea, 1 piece.",
                    "price": 100,
                    "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/app/assets/products/sliding_images/jpeg/02192480-0167-40a6-9d3a-46c522bb7552.jpg?ts=1707564221"
                },
                {
                    "name": "Coffee (कॉफी)",
                    "description": "Packaged coffee, 1 piece. 24gm",
                    "price": 99,
                    "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/app/images/products/sliding_image/13966a.jpg?ts=1723051279"
                },
                {
                    "name": "Cooking Oil (खाने का तेल)",
                    "description": "Packaged cooking oil, 1 piece.",
                    "price": 4.49,
                    "image": "https://example.com/cooking_oil.jpg"
                },
                {
                    "name": "Ghee (घी)",
                    "description": "Packaged ghee, 1 piece.",
                    "price": 5.99,
                    "image": "https://example.com/ghee.jpg"
                },
                {
                    "name": "Canned Beans (कैनड बीन्स)",
                    "description": "Packaged canned beans, 1 piece.",
                    "price": 1.99,
                    "image": "https://example.com/canned_beans.jpg"
                },
                {
                    "name": "Pasta (पास्ता)",
                    "description": "Packaged pasta, 1 piece.",
                    "price": 2.79,
                    "image": "https://example.com/pasta.jpg"
                },
                {
                    "name": "Tomato Sauce (टमाटर सॉस)",
                    "description": "Packaged tomato sauce, 1 piece.",
                    "price": 1.59,
                    "image": "https://example.com/tomato_sauce.jpg"
                },
                {
                    "name": "Biscuits (बिस्कुट)",
                    "description": "Packaged biscuits, 1 piece.",
                    "price": 1.29,
                    "image": "https://example.com/biscuits.jpg"
                },
                {
                    "name": "Noodles (नूडल्स)",
                    "description": "Packaged noodles, 1 piece.",
                    "price": 1.99,
                    "image": "https://example.com/noodles.jpg"
                },
                {
                    "name": "Spices (मसाले)",
                    "description": "Packaged spices, 1 piece.",
                    "price": 2.19,
                    "image": "https://example.com/spices.jpg"
                },
                {
                    "name": "Pickle (अचार)",
                    "description": "Packaged pickle, 1 piece.",
                    "price": 2.49,
                    "image": "https://example.com/pickle.jpg"
                },
                {
                    "name": "Jam (जैम)",
                    "description": "Packaged jam, 1 piece.",
                    "price": 2.89,
                    "image": "https://example.com/jam.jpg"
                },
                {
                    "name": "Honey (शहद)",
                    "description": "Packaged honey, 1 piece.",
                    "price": 4.99,
                    "image": "https://example.com/honey.jpg"
                },
                {
                    "name": "Milk (दूध)",
                    "description": "Packaged milk, 1 piece.",
                    "price": 1.79,
                    "image": "https://example.com/milk.jpg"
                },
                {
                    "name": "Yogurt (दही)",
                    "description": "Packaged yogurt, 1 piece.",
                    "price": 1.49,
                    "image": "https://example.com/yogurt.jpg"
                },
                {
                    "name": "Cheese (पनीर)",
                    "description": "Packaged cheese, 1 piece.",
                    "price": 2.99,
                    "image": "https://example.com/cheese.jpg"
                },
                {
                    "name": "Butter (मक्खन)",
                    "description": "Packaged butter, 1 piece.",
                    "price": 2.79,
                    "image": "https://example.com/butter.jpg"
                },
                {
                    "name": "Lentils (दाल)",
                    "description": "Loose lentils, 250 gms.",
                    "price": 1.69,
                    "image": "https://example.com/lentils.jpg"
                },
                {
                    "name": "Chickpeas (चने)",
                    "description": "Loose chickpeas, 250 gms.",
                    "price": 1.89,
                    "image": "https://example.com/chickpeas.jpg"
                },
                {
                    "name": "Kidney Beans (राजमा)",
                    "description": "Loose kidney beans, 250 gms.",
                    "price": 2.19,
                    "image": "https://example.com/kidney_beans.jpg"
                },
                {
                    "name": "Black Beans (काले बीन्स)",
                    "description": "Loose black beans, 250 gms.",
                    "price": 2.29,
                    "image": "https://example.com/black_beans.jpg"
                },
                {
                    "name": "Oats (ओट्स)",
                    "description": "Packaged oats, 1 piece.",
                    "price": 2.99,
                    "image": "https://example.com/oats.jpg"
                },
                {
                    "name": "Granola (ग्रैनोला)",
                    "description": "Packaged granola, 1 piece.",
                    "price": 3.49,
                    "image": "https://example.com/granola.jpg"
                },
                {
                    "name": "Tinned Tuna (टिन्ड टूना)",
                    "description": "Packaged tinned tuna, 1 piece.",
                    "price": 2.19,
                    "image": "https://example.com/tinned_tuna.jpg"
                },
                {
                    "name": "Pita Bread (पीटा ब्रेड)",
                    "description": "Packaged pita bread, 1 piece.",
                    "price": 1.79,
                    "image": "https://example.com/pita_bread.jpg"
                },
                {
                    "name": "Bagels (बागल्स)",
                    "description": "Packaged bagels, 1 piece.",
                    "price": 2.29,
                    "image": "https://example.com/bagels.jpg"
                },
                {
                    "name": "Tortillas (टोर्टिला)",
                    "description": "Packaged tortillas, 1 piece.",
                    "price": 2.99,
                    "image": "https://example.com/tortillas.jpg"
                },
                {
                    "name": "Mayonnaise (मायोनेज़)",
                    "description": "Packaged mayonnaise, 1 piece.",
                    "price": 3.19,
                    "image": "https://example.com/mayonnaise.jpg"
                },
                {
                    "name": "Ketchup (कैचप)",
                    "description": "Packaged ketchup, 1 piece.",
                    "price": 1.99,
                    "image": "https://example.com/ketchup.jpg"
                },
                {
                    "name": "Vinegar (सिरका)",
                    "description": "Packaged vinegar, 1 piece.",
                    "price": 1.79,
                    "image": "https://example.com/vinegar.jpg"
                },
                {
                    "name": "Mustard (सरसों)",
                    "description": "Packaged mustard, 1 piece.",
                    "price": 2.19,
                    "image": "https://example.com/mustard.jpg"
                },
                {
                    "name": "Soy Sauce (सोया सॉस)",
                    "description": "Packaged soy sauce, 1 piece.",
                    "price": 2.29,
                    "image": "https://example.com/soy_sauce.jpg"
                },
                {
                    "name": "Cereal (अनाज)",
                    "description": "Packaged cereal, 1 piece.",
                    "price": 3.49,
                    "image": "https://example.com/cereal.jpg"
                },
                {
                    "name": "Bread (ब्रेड)",
                    "description": "Packaged bread, 1 piece.",
                    "price": 1.99,
                    "image": "https://example.com/bread.jpg"
                },
                {
                    "name": "Crackers (क्रैकर्स)",
                    "description": "Packaged crackers, 1 piece.",
                    "price": 1.59,
                    "image": "https://example.com/crackers.jpg"
                },
                {
                    "name": "Popcorn (पॉपकॉर्न)",
                    "description": "Packaged popcorn, 1 piece.",
                    "price": 1.89,
                    "image": "https://example.com/popcorn.jpg"
                },
                {
                    "name": "Peanut Butter (मूँगफली का मक्खन)",
                    "description": "Packaged peanut butter, 1 piece.",
                    "price": 3.79,
                    "image": "https://example.com/peanut_butter.jpg"
                },
                {
                    "name": "Jam (जैम)",
                    "description": "Packaged jam, 1 piece.",
                    "price": 2.89,
                    "image": "https://example.com/jam.jpg"
                },
                {
                    "name": "Honey (शहद)",
                    "description": "Packaged honey, 1 piece.",
                    "price": 4.99,
                    "image": "https://example.com/honey.jpg"
                }
            ]
        },
        {
            "category": "medicines",
            "products": [
                {
                    "name": "Paracetamol (पैरासिटामोल)",
                    "description": "Packaged tablets, 10 pieces.",
                    "price": 33,
                    "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/app/images/products/sliding_image/477875a.jpg?ts=1690814372"
                },
                {
                    "name": "Ibuprofen (इबुप्रोफेन)",
                    "description": "Packaged tablets, 10 pieces.",
                    "price": 46,
                    "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/app/images/products/sliding_image/475165a.jpg?ts=1685530147"
                },
                {
                    "name": "Cough Syrup (खांसी की दवा)",
                    "description": "Packaged bottle, 100 ml.",
                    "price": 99,
                    "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/app/images/products/sliding_image/498687a.jpg?ts=1686566077"
                },
                {
                    "name": "Cold Tablets (जुकाम की गोलियां)",
                    "description": "Packaged tablets, 10 pieces.",
                    "price": 3.99,
                    "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/app/images/products/sliding_image/499611a.jpg?ts=1701153266"
                },
                {
                    "name": "Allergy Medicine (एलर्जी की दवा)",
                    "description": "Packaged tablets, 10 pieces.",
                    "price": 5.19,
                    "image": "https://example.com/allergy_medicine.jpg"
                },
                {
                    "name": "Digestive Enzyme (पाचन एंजाइम)",
                    "description": "Packaged tablets, 20 pieces.",
                    "price": 4.29,
                    "image": "https://example.com/digestive_enzyme.jpg"
                },
                {
                    "name": "Laxatives (लैक्सेटिव्स)",
                    "description": "Packaged tablets, 10 pieces.",
                    "price": 3.79,
                    "image": "https://example.com/laxatives.jpg"
                },
                {
                    "name": "Eye Drops (आंखों की दवा)",
                    "description": "Packaged bottle, 15 ml.",
                    "price": 2.99,
                    "image": "https://example.com/eye_drops.jpg"
                },
                {
                    "name": "Pain Relief Cream (दर्द निवारक क्रीम)",
                    "description": "Packaged tube, 30 gm.",
                    "price": 3.49,
                    "image": "https://example.com/pain_relief_cream.jpg"
                },
                {
                    "name": "Vitamin C (विटामिन C)",
                    "description": "Packaged tablets, 30 pieces.",
                    "price": 6.49,
                    "image": "https://example.com/vitamin_c.jpg"
                },
                {
                    "name": "Vitamin D (विटामिन D)",
                    "description": "Packaged tablets, 30 pieces.",
                    "price": 6.99,
                    "image": "https://example.com/vitamin_d.jpg"
                },
                {
                    "name": "Cough Lozenges (खांसी की लॉज़ेन्जेस)",
                    "description": "Packaged lozenges, 20 pieces.",
                    "price": 3.29,
                    "image": "https://example.com/cough_lozenges.jpg"
                },
                {
                    "name": "Nasal Spray (नाक की स्प्रे)",
                    "description": "Packaged bottle, 20 ml.",
                    "price": 4.19,
                    "image": "https://example.com/nasal_spray.jpg"
                },
                {
                    "name": "Antiseptic Cream (एंटिसेप्टिक क्रीम)",
                    "description": "Packaged tube, 30 gm.",
                    "price": 2.79,
                    "image": "https://example.com/antiseptic_cream.jpg"
                },
                {
                    "name": "Cold Sore Treatment (सर्दी की पपड़ी का इलाज)",
                    "description": "Packaged tube, 5 gm.",
                    "price": 3.99,
                    "image": "https://example.com/cold_sore_treatment.jpg"
                },
                {
                    "name": "Anti-Itch Cream (खुजली की क्रीम)",
                    "description": "Packaged tube, 30 gm.",
                    "price": 3.19,
                    "image": "https://example.com/anti_itch_cream.jpg"
                },
                {
                    "name": "Mouthwash (माउथवॉश)",
                    "description": "Packaged bottle, 250 ml.",
                    "price": 2.49,
                    "image": "https://example.com/mouthwash.jpg"
                },
                {
                    "name": "Sleep Aid (नींद की दवा)",
                    "description": "Packaged tablets, 10 pieces.",
                    "price": 4.49,
                    "image": "https://example.com/sleep_aid.jpg"
                },
                {
                    "name": "Decongestant (नाक बंद होने की दवा)",
                    "description": "Packaged tablets, 10 pieces.",
                    "price": 3.99,
                    "image": "https://example.com/decongestant.jpg"
                },
                {
                    "name": "Anti-Diarrheal (डायरिया की दवा)",
                    "description": "Packaged tablets, 10 pieces.",
                    "price": 3.49,
                    "image": "https://example.com/anti_diarrheal.jpg"
                }
            ]
        },
        {
            "category": "Paan",
            "products": [
                {
                    "name": "Gold Flake (गोल्ड फ्लेक)",
                    "description": "Pack of 20 cigarettes.",
                    "price": 5.99,
                    "image": "https://example.com/gold_flake.jpg"
                },
                {
                    "name": "Classic (क्लासिक)",
                    "description": "Pack of 20 cigarettes.",
                    "price": 6.49,
                    "image": "https://example.com/classic.jpg"
                },
                {
                    "name": "Four Square (फोर स्क्वायर)",
                    "description": "Pack of 20 cigarettes.",
                    "price": 5.29,
                    "image": "https://example.com/four_square.jpg"
                },
                {
                    "name": "Red & White (रेड एंड व्हाइट)",
                    "description": "Pack of 20 cigarettes.",
                    "price": 6.99,
                    "image": "https://example.com/red_white.jpg"
                },
                {
                    "name": "Navy Cut (नेवी कट)",
                    "description": "Pack of 20 cigarettes.",
                    "price": 5.49,
                    "image": "https://example.com/navy_cut.jpg"
                },
                {
                    "name": "Royal (रॉयल)",
                    "description": "Pack of 20 cigarettes.",
                    "price": 7.29,
                    "image": "https://example.com/royal.jpg"
                },
                {
                    "name": "Gold Seal (गोल्ड सील)",
                    "description": "Pack of 20 cigarettes.",
                    "price": 6.79,
                    "image": "https://example.com/gold_seal.jpg"
                },
                {
                    "name": "Nicotex (निकोटेक्स)",
                    "description": "Pack of 20 cigarettes.",
                    "price": 5.99,
                    "image": "https://example.com/nicotex.jpg"
                },
                {
                    "name": "Wills Navy Cut (विल्स नेवी कट)",
                    "description": "Pack of 20 cigarettes.",
                    "price": 6.49,
                    "image": "https://example.com/wills_navy_cut.jpg"
                },
                {
                    "name": "Fags (फैग्स)",
                    "description": "Pack of 20 cigarettes.",
                    "price": 5.69,
                    "image": "https://example.com/fags.jpg"
                },
                {
                    "name": "Star (स्टार)",
                    "description": "Pack of 20 cigarettes.",
                    "price": 6.99,
                    "image": "https://example.com/star.jpg"
                },
                {
                    "name": "Gold Flake Kings (गोल्ड फ्लेक किंग्स)",
                    "description": "Pack of 20 cigarettes.",
                    "price": 7.49,
                    "image": "https://example.com/gold_flake_kings.jpg"
                },
                {
                    "name": "Marlboro (मार्लबोरो)",
                    "description": "Pack of 20 cigarettes.",
                    "price": 8.99,
                    "image": "https://example.com/marlboro.jpg"
                },
                {
                    "name": "Red Label (रेड लेबल)",
                    "description": "Pack of 20 cigarettes.",
                    "price": 7.99,
                    "image": "https://example.com/red_label.jpg"
                },
                {
                    "name": "Classic Milds (क्लासिक मिल्ड्स)",
                    "description": "Pack of 20 cigarettes.",
                    "price": 6.49,
                    "image": "https://example.com/classic_milds.jpg"
                },
                {
                    "name": "Gold Flake Premium (गोल्ड फ्लेक प्रीमियम)",
                    "description": "Pack of 20 cigarettes.",
                    "price": 8.49,
                    "image": "https://example.com/gold_flake_premium.jpg"
                },
                {
                    "name": "Marlboro Lights (मार्लबोरो लाइट्स)",
                    "description": "Pack of 20 cigarettes.",
                    "price": 8.99,
                    "image": "https://example.com/marlboro_lights.jpg"
                },
                {
                    "name": "Benson & Hedges (बेंसन एंड हेजेस)",
                    "description": "Pack of 20 cigarettes.",
                    "price": 9.49,
                    "image": "https://example.com/benson_hedges.jpg"
                },
                {
                    "name": "L&M (एल एंड एम)",
                    "description": "Pack of 20 cigarettes.",
                    "price": 7.29,
                    "image": "https://example.com/lm.jpg"
                },
                {
                    "name": "Dharma (धर्मा)",
                    "description": "Pack of 20 cigarettes.",
                    "price": 6.79,
                    "image": "https://example.com/dharma.jpg"
                },
                {
                    "name": "Pan Parag (पान पराग)",
                    "description": "Pack of 10 pouches.",
                    "price": 1.99,
                    "image": "https://example.com/pan_parag.jpg"
                },
                {
                    "name": "Rajshree (राजश्री)",
                    "description": "Pack of 10 pouches.",
                    "price": 2.29,
                    "image": "https://example.com/rajshree.jpg"
                },
                {
                    "name": "Kesar (केसर)",
                    "description": "Pack of 10 pouches.",
                    "price": 2.49,
                    "image": "https://example.com/kesar.jpg"
                },
                {
                    "name": "Vimal (विमल)",
                    "description": "Pack of 10 pouches.",
                    "price": 1.89,
                    "image": "https://example.com/vimal.jpg"
                },
                {
                    "name": "Pan Vilas (पान विलास)",
                    "description": "Pack of 10 pouches.",
                    "price": 2.09,
                    "image": "https://example.com/pan_vilas.jpg"
                },
                {
                    "name": "Rajat (रजत)",
                    "description": "Pack of 10 pouches.",
                    "price": 1.99,
                    "image": "https://example.com/rahat.jpg"
                },
                {
                    "name": "Ganga (गंगा)",
                    "description": "Pack of 10 pouches.",
                    "price": 2.19,
                    "image": "https://example.com/ganga.jpg"
                },
                {
                    "name": "Zarda (जर्दा)",
                    "description": "Pack of 10 pouches.",
                    "price": 2.39,
                    "image": "https://example.com/zarda.jpg"
                },
                {
                    "name": "Tata (टाटा)",
                    "description": "Pack of 10 pouches.",
                    "price": 2.09,
                    "image": "https://example.com/tata.jpg"
                },
                {
                    "name": "Madhur (मधुर)",
                    "description": "Pack of 10 pouches.",
                    "price": 2.29,
                    "image": "https://example.com/madhur.jpg"
                },
                {
                    "name": "Betel Leaves (पान के पत्ते)",
                    "description": "Loose betel leaves, 10 pieces.",
                    "price": 1.49,
                    "image": "https://example.com/betel_leaves.jpg"
                },
                {
                    "name": "Areca Nut (सुपारी)",
                    "description": "Loose areca nut, 100 gms.",
                    "price": 2.19,
                    "image": "https://example.com/areca_nut.jpg"
                },
                {
                    "name": "Chuna (चूना)",
                    "description": "Packaged chuna, 50 gms.",
                    "price": 0.99,
                    "image": "https://example.com/chuna.jpg"
                },
                {
                    "name": "Kesar (केसर)",
                    "description": "Packaged kesar, 5 gms.",
                    "price": 3.99,
                    "image": "https://example.com/kesar.jpg"
                },
                {
                    "name": "Cardamom (इलायची)",
                    "description": "Packaged cardamom, 25 gms.",
                    "price": 2.49,
                    "image": "https://example.com/cardamom.jpg"
                },
                {
                    "name": "Cloves (लौंग)",
                    "description": "Packaged cloves, 20 gms.",
                    "price": 2.99,
                    "image": "https://example.com/cloves.jpg"
                },
                {
                    "name": "Tamarind (इमली)",
                    "description": "Packaged tamarind, 100 gms.",
                    "price": 1.89,
                    "image": "https://example.com/tamarind.jpg"
                }
            ]
        },
        {
            "category": "snacks",
            "products": [
                {
                    "name": "Lays Classic Potato Chips (लेज़ क्लासिक आलू के चिप्स)",
                    "description": "Pack of crispy potato chips, 200 gms.",
                    "price": 2.49,
                    "image": "https://example.com/lays_classic.jpg"
                },
                {
                    "name": "Doritos Nachos (डोरिटोस नाचोस)",
                    "description": "Pack of crunchy nachos, 150 gms.",
                    "price": 2.99,
                    "image": "https://example.com/doritos_nachos.jpg"
                },
                {
                    "name": "Pretzels (प्रेट्ज़ेल्स)",
                    "description": "Pack of salty pretzels, 200 gms.",
                    "price": 3.49,
                    "image": "https://example.com/pretzels.jpg"
                },
                {
                    "name": "Act II Butter Popcorn (ऐक्ट II बटर पॉपकॉर्न)",
                    "description": "Pack of buttered popcorn, 100 gms.",
                    "price": 1.99,
                    "image": "https://example.com/act_ii_popcorn.jpg"
                },
                {
                    "name": "Cheetos Cheese Balls (चिटोस चीज़ बॉल्स)",
                    "description": "Pack of cheesy balls, 150 gms.",
                    "price": 2.79,
                    "image": "https://example.com/cheetos_cheese_balls.jpg"
                },
                {
                    "name": "Kurkure (कुरकुरे)",
                    "description": "Pack of spicy corn chips, 200 gms.",
                    "price": 2.69,
                    "image": "https://example.com/kurkure.jpg"
                },
                {
                    "name": "Cadbury Dairy Milk (कैडबरी डेयरी मिल्क)",
                    "description": "Assorted chocolates, pack of 10 pieces.",
                    "price": 4.99,
                    "image": "https://example.com/cadbury_dairy_milk.jpg"
                },
                {
                    "name": "Bourbon Biscuits (बोरबॉन बिस्कुट)",
                    "description": "Pack of assorted biscuits, 200 gms.",
                    "price": 2.29,
                    "image": "https://example.com/bourbon_biscuits.jpg"
                },
                {
                    "name": "Almonds Mix (बादाम मिश्रण)",
                    "description": "Pack of mixed almonds, 150 gms.",
                    "price": 3.99,
                    "image": "https://example.com/almonds_mix.jpg"
                },
                {
                    "name": "Munch Trail Mix (मंच ट्रेल मिक्स)",
                    "description": "Pack of trail mix with nuts and dried fruits, 200 gms.",
                    "price": 4.49,
                    "image": "https://example.com/munch_trail_mix.jpg"
                },
                {
                    "name": "McVitie's Digestive Cookies (मैकविटी का डाइजेस्टिव कुकीज़)",
                    "description": "Pack of assorted cookies, 250 gms.",
                    "price": 3.29,
                    "image": "https://example.com/mcvities_cookies.jpg"
                },
                {
                    "name": "Chex Mix (चेक्स मिक्स)",
                    "description": "Pack of crunchy Chex mix, 150 gms.",
                    "price": 2.99,
                    "image": "https://example.com/chex_mix.jpg"
                },
                {
                    "name": "Quaker Rice Cakes (क्वेकर राइस केक)",
                    "description": "Pack of light rice cakes, 100 gms.",
                    "price": 2.19,
                    "image": "https://example.com/quaker_rice_cakes.jpg"
                },
                {
                    "name": "Haldiram's Samosas (हल्दीराम's समोसा)",
                    "description": "Pack of frozen samosas, 6 pieces.",
                    "price": 4.49,
                    "image": "https://example.com/haldirams_samosas.jpg"
                },
                {
                    "name": "Fresh Vegetable Sticks (ताजे सब्जी के स्टिक्स)",
                    "description": "Pack of fresh vegetable sticks with dip, 200 gms.",
                    "price": 3.49,
                    "image": "https://example.com/vegetable_sticks.jpg"
                },
                {
                    "name": "Lay's Stax (लेज़ स्टैक्स)",
                    "description": "Pack of stackable potato chips, 150 gms.",
                    "price": 2.79,
                    "image": "https://example.com/lays_stax.jpg"
                },
                {
                    "name": "Ritz Crackers (रिट्ज़ क्रैकर्स)",
                    "description": "Pack of buttery crackers, 200 gms.",
                    "price": 3.29,
                    "image": "https://example.com/ritz_crackers.jpg"
                },
                {
                    "name": "Pringles (प्रिंगल्स)",
                    "description": "Pack of potato crisps, 180 gms.",
                    "price": 3.49,
                    "image": "https://example.com/pringles.jpg"
                },
                {
                    "name": "Popped Chips (पॉप्ड चिप्स)",
                    "description": "Pack of light popped chips, 150 gms.",
                    "price": 2.99,
                    "image": "https://example.com/popped_chips.jpg"
                },
                {
                    "name": "Oreo Cookies (ओरियो कुकीज़)",
                    "description": "Pack of classic Oreo cookies, 300 gms.",
                    "price": 4.29,
                    "image": "https://example.com/oreo_cookies.jpg"
                },
                {
                    "name": "Goldfish Crackers (गोल्डफिश क्रैकर्स)",
                    "description": "Pack of cheddar goldfish crackers, 200 gms.",
                    "price": 3.49,
                    "image": "https://example.com/goldfish_crackers.jpg"
                },
                {
                    "name": "SunChips (सनचिप्स)",
                    "description": "Pack of multigrain chips, 150 gms.",
                    "price": 3.29,
                    "image": "https://example.com/sunchips.jpg"
                },
                {
                    "name": "Nabisco Wheat Thins (नैबिस्को व्हीट थिन्स)",
                    "description": "Pack of wheat crackers, 200 gms.",
                    "price": 3.99,
                    "image": "https://example.com/wheat_thins.jpg"
                },
                {
                    "name": "Snyder's Pretzels (स्नाइडर's प्रेट्ज़ेल्स)",
                    "description": "Pack of pretzel twists, 200 gms.",
                    "price": 3.59,
                    "image": "https://example.com/snyders_pretzels.jpg"
                },
                {
                    "name": "Cheddar Cheese Popcorn (चेडर चीज़ पॉपकॉर्न)",
                    "description": "Pack of cheddar cheese flavored popcorn, 100 gms.",
                    "price": 2.19,
                    "image": "https://example.com/cheddar_popcorn.jpg"
                },
                {
                    "name": "Belvita Breakfast Biscuits (बेल्विटा ब्रेकफास्ट बिस्कुट)",
                    "description": "Pack of breakfast biscuits, 250 gms.",
                    "price": 3.49,
                    "image": "https://example.com/belvita_biscuits.jpg"
                }
            ]
        }
    ]
    

