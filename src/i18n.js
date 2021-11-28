import { createI18n } from 'vue-i18n';

const messages = {
  en: {
    welcome: 'Welcome!',
    home: 'Homepage',
    cart: 'Cart',
    account: 'Account',
    noResult: 'No result found. Go back to the homepage',
    inSale: 'Special offer',
    details: 'Details',
    comments: 'Comments ({num})',
    quantity: 'Quantity : {qty} (max: {qtyMax})',
    featuredProducts: 'Featured products',
    viewAll: 'View all',
    viewSalesOnly: 'View special offers only',
    color: 'Color',
    name: 'Name',
    stars: 'Stars',
    comment: 'Comment',
    submit: 'Submit',
    cancel: 'Cancel',
    pleaseFillTheForm: 'Please fill the form',
    showForm: 'Show the form',
    hideForm: 'Hide the form',
    homepage: 'Home',
  },
  fr: {
    welcome: 'Bienvenue !',
    home: 'Accueil',
    cart: 'Panier',
    account: 'Mon compte',
    noResult: 'Aucun résultat ici. Retour à la page d\'accueil.',
    inSale: 'PROMO',
    details: 'Détails',
    comments: 'Commentaires ({num})',
    quantity: 'Quantité : {qty} (max : {qtyMax})',
    featuredProducts: 'Produits à la une',
    viewAll: 'Afficher tout',
    viewSalesOnly: 'Afficher uniquement les promos',
    color: 'Couleur',
    name: 'Nom',
    stars: 'Note',
    comment: 'Commentaire',
    submit: 'Envoyer',
    cancel: 'Annuler',
    pleaseFillTheForm: 'Merci de remplir tous les champs',
    showForm: 'Afficher le formulaire',
    hideForm: 'Cacher le formulaire',
    homepage: 'Accueil',
  },
}

export const i18n = createI18n({
  legacy: false,
  locale: 'fr',
  fallbackLocale: 'en',
  globalInjection: true,
  messages,
  numberFormats: {
    'fr': {
      currency: {
        style: 'currency',
        currency: 'EUR'
      }
    }
  },
  datetimeFormats: {
    'fr': {
      long: {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
      }
    }
  }
})
