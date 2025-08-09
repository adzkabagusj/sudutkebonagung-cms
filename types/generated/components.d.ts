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

export interface PerangkatDesaPerangkatDesa extends Struct.ComponentSchema {
  collectionName: 'components_perangkat_desa_perangkat_desas';
  info: {
    displayName: 'Perangkat Desa';
    icon: 'user';
  };
  attributes: {
    foto: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    jabatan: Schema.Attribute.String;
    nama: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'info-praktis.info-praktis': InfoPraktisInfoPraktis;
      'perangkat-desa.perangkat-desa': PerangkatDesaPerangkatDesa;
    }
  }
}
