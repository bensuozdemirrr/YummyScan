document.getElementById('findRecipesBtn').addEventListener('click', function () {
    const input = document.getElementById('ingredientsInput').value.trim();
    const messageDisplay = document.getElementById('messageDisplay');
    const recipeResults = document.getElementById('recipeResults');

    messageDisplay.classList.add('hidden');
    recipeResults.innerHTML = '';

    if (input === '') {
        messageDisplay.textContent = 'Lütfen malzeme girin.';
        messageDisplay.classList.remove('hidden');
        return;
    }

    const ingredients = input.split(',').map(i => i.trim().toLowerCase());

    const recipes = [
        { name: 'Domatesli Omlet', ingredients: ['domates', 'yumurta'], instructions: 'Yumurtaları çırp, domates ekle ve pişir.' },
        { name: 'Peynirli Tost', ingredients: ['ekmek', 'peynir'], instructions: 'Ekmeğe peynir koy, tost makinesinde pişir.' },
        { name: 'Salçalı Makarna', ingredients: ['makarna', 'salça'], instructions: 'Makarnayı haşla, salça ile sos yap ve karıştır.' }
    ];

    const matched = recipes.filter(recipe =>
        recipe.ingredients.every(ing => ingredients.includes(ing))
    );

    if (matched.length === 0) {
        messageDisplay.textContent = 'Bu malzemelerle eşleşen tarif yok.';
        messageDisplay.classList.remove('hidden');
        return;
    }

    matched.forEach(recipe => {
        const div = document.createElement('div');
        div.classList.add('recipe');
        div.innerHTML = `<h2>${recipe.name}</h2><p>${recipe.instructions}</p>`;
        recipeResults.appendChild(div);
    });
});
