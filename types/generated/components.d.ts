import type { Schema, Struct } from '@strapi/strapi';

export interface InfoPraktisInfoPraktis extends Struct.ComponentSchema {
  collectionName: 'components_info_praktis_info_praktis';
  info: {
    displayName: 'info_praktis';
    icon: 'information';
  };
  attributes: {
    harga_tiket: Schema.Attribute.String;
    jam_buka: Schema.Attribute.String;
    tips: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'info-praktis.info-praktis': InfoPraktisInfoPraktis;
    }
  }
}
