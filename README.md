# Formation EMAGMA - Vue 3 + Vite

## step6-improve-product

### Objectifs

- Création d'un composant `Breadcrumbs`
  - Nouveau composant `src/components/Breadcrumbs.vue`
  - Utilisation du composant dans la page `src/views/Category.vue`
  - Utilisation du composant dans la page `src/views/Product.vue`
- Découpage de la page produit
  - Nouveau composant `src/components/product-page/ProductColors.vue`
  - Nouveau composant `src/components/product-page/ProductComments.vue`
  - Nouveau composant `src/components/product-page/ProductDetails.vue`
  - Nouveau composant `src/components/product-page/ProductQuantity.vue`
  - Nouveau mixin `src/mixins/ProductMixin.js`
  - Mise à jour de la page produit `src/views/Product.vue`
  - Mise à jour du composant `src/components/product-list/ProductItem.vue` pour utiliser le 
    mixin et ajouter les liens
- Utilisation d'un watcher sur l'id du produit et de la catégorie au lieu de l'attribut `key` 
  sur le placeholder du router
- Installation des icones font awesome et du composant vue
  - `npm install "@fortawesome/vue-fontawesome@prerelease" "@fortawesome/free-solid-svg-icons" "@fortawesome/free-regular-svg-icons" "@fortawesome/fontawesome-svg-core"`
  - Configuration du composant dans `src/main.js`
- Gestion de la quantité max en fonction de la couleur choisie
  - `src/views/Product.vue`
  - `src/components/product-page/ProductColors.vue`
  - `src/components/product-page/ProductQuantity.vue`
- Utilisation du composant `<keep-alive>` pour la gestion des onglets dans `src/views/Product.vue`
- Formulaire d'ajout de commentaire
  - Nouveau composant `src/components/product-page/ProductCommentForm.vue`
  - Utilisation du composant de formulaire dans `src/components/product-page/ProductComments.vue`
