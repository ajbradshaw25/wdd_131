// recipes.mjs
const recipes = [
	{
		author: 'Provo High Culinary Students',
		url: '',
		isBasedOn: '',
		cookTime: '30 Min',
		datePublished: '2016-10-16',
		tags: ['Waffles', 'Sweet Potato', 'Side'],
		description: 'Savory waffles made with Sweet potato with a hint of Ginger',
		image: 'choc-cake.jpg',
		recipeIngredient: [
			'2 separated eggs',
			'1/4 C Oil',
			'1/4 tsp salt',
			'1/4 tsp Cayenne pepper',
			'3/4 C milk',
			'1 Tbsp Brown Sugar',
			'2 tsp Shredded Ginger',
			'3/4 C Mashed Sweet Potatoes',
			'1 Tbsp Minced Shallots',
			'1 Tbsp Baking Powder',
			'1 Tbsp Chives',
			'1/4 C Cornmeal',
			'1 C Flour'
		],
		name: 'Sweet Potato Waffles',
		prepTime: '30 Min',
		recipeInstructions: [
			'Add the egg yolks, oil, salt, cayenne, sugar, ginger, shallots, sweet potatoes (steam and mash before), and milk and mix well.',
			'Next add the cornmeal, chives, and flour and baking powder',
			'Whip the egg whites until stiff and fold in',
			'Cook until golden brown in a waffle iron. Serve with butter and Wilted Greens or Honey.'
		],
		recipeYield: '6 waffles',
		rating: 4
	},
	{
		author: 'Shane Thompson',
		url: '',
		isBasedOn: '',
		cookTime: '20 min',
		datePublished: '',
		tags: ['Chicken', 'Entree'],
		description:
			'Delicious quick and easy creamy rice dish. The mustard, mushrooms, and lemon all blend together wonderfully',
		image: 'snowflake.jpg',
		recipeIngredient: [
			'2 Chicken Tenders, Cubed',
			'4 Mushrooms, Sliced',
			'1/2 C Whipping Cream',
			'1-2 Tbsp Stone Ground Mustard',
			'1 tsp Lemon Juice',
			'Salt and Pepper to taste',
			'1 C Rice, uncooked',
			'4-5 oz Fresh Green Beans'
		],
		name: 'Escalope de Poulet a la Creme with steamed green beans (Chicken with Cream)',
		prepTime: '10 min',
		recipeInstructions: [
			'Add 1 1/2 cups of water to a pan and bring to a boil.  Add the rice and reduce heat to low and simmer for 10-15 minutes or until all the moisture is gone.',
			'Cube chicken then cook over medium high heat in a fry pan, add the mushrooms about halfway through. (10 minutes). ',
			'Pour in cream, mustard and salt and pepper.  Stir.  On medium heat, simmer until it thickens (5 minutes)',
			'While preparing sauce: wash the beans, then trim the ends and snap (or cut) into 2in lengths.  In a sauce pan with a colander add about 1 cup water and steam the beans (10-15 minutes)',
			'Serve sauce over rice, with the Green beans on the side.'
		],
		recipeYield: '3 servings',
		rating: 4.5
	},
	{
		author: 'Mary Herman',
		url: '',
		isBasedOn: '',
		cookTime: '7 to 8 min',
		datePublished: '1963-12-16',
		tags: ['Potatoes', 'side'],
		description:
			'Easy and delicious oven roasted potatoes that go great with almost anything.',
		image: 'heart-cookie.jpg',
		recipeIngredient: [
			'1 1/2 cups sifted confectioners sugar',
			'1 cup of butter',
			'1 egg',
			'1 tsp. vanilla extract',
            '1/2 tsp. almond extract',
			'2 1/2 cups of all-purpose flour',
			'1 tsp. baking soda',
            '1 tsp. cream of tartar',
			'ingredients for icing below,',
			'1 cup sifted confectioners sugar',
            '1/4 tsp. salt',
			'1/2 tsp. vanilla extract or other flavorings',
			'1 1/2 tbsp. cream (heavy whipping cream)'
		],
		name: 'Heart shaped cookies',
		prepTime: '15 - 20 min',
		recipeInstructions: [
			'Mix sugar and butter. Add egg and flavorings; mix thoroughly.',
			'Measure flour by sifting. Stir dry ingredients together and blend in.',
			'Refridgerate 2 to 3 hours.',
			'Heat oven to 375° Fahrenheit. Divide dough accordingly, and place the dough on a lightly floured surface. You may use a pastry cloth, cutting board, table or a kitchen counter.',
			'Roll out the dough to 1/16" thick. Cut into heart shapes with a cookie cutter; sprinkle with sugar.',
            'Place cookies on a lightly greased baking sheet. Bake 7 to 8 minutes, or until delicately golden. Once cooled, frost cookies with creamy icing.',
            'icing instructions are as followed: Blend sugar, cream and desired flavoring. And if desired, add a few drops of food coloring. Then spread icing onto the cookies.'
		],
		recipeYield: '5 dozen  2 to 2 1/2" cookies',
		rating: 4
	}
]

// This makes the 'recipes' the default export
export default recipes;