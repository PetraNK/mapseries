var acceptedlanguages = require('acceptedlanguages');

module.exports = function() {

  var defaultLang = 'en';
  var texts = {
    'cs': {
      newSerie: 'Nová séria',
      openSerie: 'Otvoriť sériu',
      save: 'Uložiť',
      discardChanges: 'Zahodiť zmeny',
      publish: 'Publikovať',
      import: 'Import',
      export: 'Export',
      tools: 'Nástroje',
      login: 'Prihlásiť sa',
      logout: 'Odhlásiť',
      openSerieDialogTitle: 'Otvoriť existujúcu sériu',
      importAlt: 'Podporované formáty: GeoJSON, TopoJSON, KML, CSV, GPX a OSM XML',
      addMapLayer: 'Pridať mapovú vrstvu',
      addMapLayerAlt: 'Pridá vlastnú podkladovú vrstvu',
      layerUrl: 'URL vrstvy',
      layerName: 'Názov vrstvy',
      zoomToFeatures: 'Priblížiť k mriežke',
      zoomToFeaturesAlt: 'Priblíži mapu k vytvorenej mriežke',
      clear: 'Zmazať',
      clearAlt: 'Odstráni mriežku z mapy',
      clearConfirm: 'Ste si istý, že chcete zmazať mriežku z mapy?',
      unexpectedError: 'Nastala neočakávaná chyba',
      newSerieDialogTitle: 'Vytvorenie novej série',
      newSerieDialogSerieTitle: 'Názov novej série',
      newSerieDialogSerieArea: 'Názov oblasti, do ktorej séria spadá',
      other: 'Iná',
      saveFailed: 'Uloženie zlyhalo. Nastala neočakávaná chyba',
      saveSuccess: 'Úspešne uložené',
      discardFailed: 'Zrušenie zmien zlyhalo. Nastala neočakávaná chyba',
      discardSuccess: 'Zmeny boli úspešné zrušené',
      publishFailed: 'Publikovanie zlyhalo. Nastala neočakávaná chyba',
      publishSuccess: 'Úspešne publikované',
      imported: 'Naimportovaných',
      features: 'geometrií',
      colsCount: 'Počet stĺpcov',
      rowsCount: 'Počet riadkov',
      gridDialogTitle: 'Vytvor mriežku',
      configParseError: 'Nastala chyba pri parsování súboru config',
      save: 'Uložiť',
      cancel: 'Zrušiť',
      deleteFeature: 'Zmazať',
      properties: 'Metadáta',
      addRow: 'Pridať riadok',
      info: 'Info',
      meters: 'Metre',
      kilometers: 'Kilometre',
      feet: 'Stopy',
      yards: 'Jardy',
      miles: 'Míle',
      latitude: 'Zem. šídka',
      longitude: 'Zem. dĺžka',
      sqMeters: 'Rozloha v metroch',
      sqKilometers: 'Rozloha v kilometroch',
      sqFeet: 'Rozloha v stopách',
      acres: 'Rozloha v akroch',
      sqMiles: 'Rozloha v míľach',
      authFailed: 'Autentizácia zlyhala',
      loginRequired: 'Musíte sa prihlásiť'
    },
    'en': {
      newSerie: 'New serie',
      openSerie: 'Open serie',
      save: 'Save',
      discardChanges: 'Discard changes',
      publish: 'Publish',
      import: 'Import',
      export: 'Export',
      tools: 'Tools',
      login: 'Login',
      logout: 'Logout',
      openSerieDialogTitle: 'Open existent serie',
      importAlt: 'GeoJSON, TopoJSON, KML, CSV, GPX and OSM XML supported',
      addMapLayer: 'Add map layer',
      addMapLayerAlt: 'Add a custom tile layer',
      layerUrl: 'Layer URL',
      layerName: 'Layer name',
      zoomToFeatures: 'Zoom to features',
      zoomToFeaturesAlt: 'Zoom to the extent of all features',
      clear: 'Clear',
      clearAlt: 'Delete all features from the map',
      clearConfirm: 'Are you sure you want to delete all features from this map?',
      unexpectedError: 'Unexpected error',
      newSerieDialogTitle: 'Create new serie',
      newSerieDialogSerieTitle: 'New serie title',
      newSerieDialogSerieArea: 'Name of area to which serie belongs',
      other: 'Other',
      saveFailed: 'Saving failed. Unexpected error occured',
      saveSuccess: 'Saved successfully',
      discardFailed: 'Discard failed. Unexpected error occured',
      discardSuccess: 'Changes was successfully discarded',
      publishFailed: 'Publishing failed. Unexpected error occured',
      publishSuccess: 'Published successfully',
      imported: 'Imported',
      features: 'features',
      colsCount: 'Number of cols',
      rowsCount: 'Number of rows',
      gridDialogTitle: 'Create grid',
      configParseError: 'Error occured during parsing of config file',
      save: 'Save',
      cancel: 'Cancel',
      deleteFeature: 'Delete feature',
      properties: 'Properties',
      addRow: 'Add row',
      info: 'Info',
      meters: 'Meters',
      kilometers: 'Kilometers',
      feet: 'Feet',
      yards: 'Yards',
      miles: 'Miles',
      latitude: 'Latitude',
      longitude: 'Longitude',
      sqMeters: 'Sq. Meters',
      sqKilometers: 'Sq. Kilometers',
      sqFeet: 'Sq. Feet',
      acres: 'Acres',
      sqMiles: 'Sq. Miles',
      authFailed: 'Authentication with GitHub failed',
      loginRequired: 'Login required'
    }
  };

  var result = null;
  acceptedlanguages.accepted.every(function(langCode) {
    var lang = langCode.split('-')[0];
    if (lang in texts) {
      result = lang;
      return false;
    }
    return true;
  });

  if (result === null) {
    result = defaultLang;
  }

  return texts[result];
};
