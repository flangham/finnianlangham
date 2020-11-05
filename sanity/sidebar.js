import S from '@sanity/desk-tool/structure-builder';

// Build a custom sidebar
export default function Sidebar() {
  return S.list()
    .title('Finnian Langham')
    .items([
      ...S.documentTypeListItems().filter(item => (item.getId() !== 'folio')),
      S.listItem()
        .title('Folio')
        .icon(() => '🎨')
        .child(
          S.editor()
            .schemaType('folio')
            .documentId('folio')
            .title('Folio')
        ),
    ]);
}
