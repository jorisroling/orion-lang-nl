i18n.map('nl', {
  global: {
    save: 'Bewaar',
    create: 'Maak',
    logout: 'Logout',
    back: 'Terug',
    cancel: 'Annuleren',
    delete: 'Verwijderen',
    confirm: 'Bevestigen',
    choose: 'Kies',
    noPermission: 'Je heb geen bevoegdheid',
    passwordNotMatch: 'Wachtwoord klopt niet',
    optional: 'Optioneel'
  },
  accounts: {
    schema: {
      emails: {
        title: 'E-mails',
        address: 'Adres',
        verified: 'Geverifieerd'
      },
      password: {
        title: 'Wachtwoord',
        new: 'Nieuw Wachtwoord',
        confirm: 'Bevestig Wachtwoord'
      },
      profile: {
        name: 'Naam'
      }
    },
    index: {
      title: 'Accounts',
      actions: {
        edit: 'Edit',
      },
      tableTitles: {
        name: 'Name',
        email: 'Email',
        roles: 'Roles',
        actions: 'Actions'
      }
    },
    update: {
      title: 'Wijzig Account',
      messages: {
        noPermissions: 'Je hebt geen bevoegdheid om deze gebruiker te bewerken'
      },
      sections: {
        profile: {
          title: 'Profiel'
        },
        roles: {
          title: 'Rol',
          selectRoles: 'Kies gebruikers rollen'
        },
        changePassword: {
          title: 'Verander Wachtwoord'
        },
        deleteUser: {
          title: 'Gevaar',
          advice: 'Het verwijderen van gebuikers kan problemen veroorzaken.',
          button: 'Verwijder Gebruiker'
        }
      }
    },
    myAccount: {
      title: 'Mijn Account',
    },
    create: {
      title: 'Creëer een gebruiker',
      createInvitation: 'Creëer een uitnodiging',
      createUserNow: 'Creëer gebruiker nu',
      inviteOther: 'Nodig een ander uit',
      selectRoles: 'Kies nieuwe gebruiker rollen',
      email: 'E-mail',
      messages: {
        successfullyCreated: 'Uitnodiging succesvol gecreëerd'
      }
    },
    changePassword: {
      title: 'Verander Wachtwoord',
    },
    updateProfile: {
      title: 'Bewerk Profiel',
    },
    register: {
      title: 'Registreer',
      registerButton: 'Registreer',
      fields: {
        email: 'E-mail',
        name: 'Naam',
        password: 'Wachtwoord',
        confirmPassword: 'Wachtwoord (opnieuw)'
      },
      messages: {
        invalidEmail: 'Ongeldig E-mail',
        invalidInvitationCode: 'Ongeldige uitnodigingscode',
      }
    }
  },
  collections: {
    create: {
      title: 'Creëer een {$1}'
    },
    update: {
      title: 'Bewerk {$1}'
    },
    delete: {
      title: 'Verwijder {$1}',
      confirmQuestion: 'Weet je zeker dat je deze {$1} wilt verwijderen?'
    },
    common: {
      defaultPluralName: 'dingen',
      defaultSingularName: 'ding',
    }
  },
  config: {
    update: {
      title: 'Instelling',
    }
  },
  dictionary: {
    update: {
      title: 'Lexicon'
    }
  },
  filesystem: {
    messages: {
      notFound_id: 'Bestand niet gevonden [{$i}]',
      errorUploading: 'Fout bij uploaden bestand',
      errorRemoving: 'Fout bij verwijderen bestand',
    }
  },
  pages: {
    schema: {
      title: 'Titel',
      url: 'Url',
    },
    index: {
      title: 'Pagina\'s',
    },
    create: {
      title: 'Creëer pagina',
      chooseTemplate: 'Kies Sjabloon'
    },
    update: {
      title: 'Bewerk pagina',
    },
    delete: {
      title: 'Verwijder pagina',
      confirmQuestion: 'Weet je zeker dat je deze pagina wilt verwijderen?'
    }
  },
  attributes: {
    users: {
      pluralName: 'gerbruikers',
      singularName: 'gerbruiker',
    },
    file: {
      choose: 'Kies bestand',
      noFile: 'Geen bestand',
    },
    image: {
      choose: 'Kies plaatje'
    }
  },
  tabular: {
    search: 'Zoek:',
    info: 'Toont _START_ tot _END_ van _TOTAL_ vermeldingen',
    infoEmpty: 'Toont 0 tot 0 van 0 vermeldingen',
    lengthMenu: 'Toon _MENU_ vermeldingen',
    emptyTable: 'Geen data beschikbaar in tabel',
    paginate: {
      first: 'Eerste',
      previous: 'Vorige', 
      next: 'Volgende',
      last: 'Laaste',
    }
  }
})