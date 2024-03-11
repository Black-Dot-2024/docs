/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  //  tutorialSidebar: [{ type: 'autogenerated', dirName: '.' }],

  // But you can create a sidebar manually

  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Acerca de Nosotros',
      items: ['nosotros/conociendo-blackdot',
        'nosotros/compromisos',
        'nosotros/equipo',
        'nosotros/mision-vision-valores',
      ],
    },
    {
      type: 'category',
      label: 'Ética',
      items: ['etica/denuncias-anonimas'],
    },
    {
      type: 'category',
      label: 'Plan de Comunicación',
      items: ['comunicacion/comunicacion-cr',
        'comunicacion/comunicacion-zg',
        'comunicacion/comunicacion-profesores',
      ]
    },
    {
      type: 'category',
      label: 'WoW',
      items: [
                {
                  type: 'category',
                  label: 'Políticas',
                  items: [ 'politicas/pol-bdt-001' ]
                },
                {
                  type: 'category',
                  label: 'Procesos',
                  items: ['procesos/Mapa de Procesos',
                          'procesos/pro-bdt-001',
                          'procesos/pro-bdt-002',
                          {
                            type: 'category',
                            label: 'PRO-BDT-003 Identificación de la Necesidad del Cliente',
                            items: [
                              'procesos/pro-bdt-003/pro-bdt-003',
                              'procesos/pro-bdt-003/f-pro-bdt-003a'
                            ]
                          },
                          {
                            type: 'category',
                            label: 'PRO-BDT-004 Estimación de requerimientos',
                            items: [
                              'procesos/pro-bdt-004/pro-bdt-004',
                              'procesos/pro-bdt-004/f-pro-bdt-004a'
                            ]
                          },
                          'procesos/pro-bdt-005',
                          {
                            type: 'category',
                            label: 'PRO-BDT-006 Gestión de solicitud de cambio de requerimientos',
                            items: [
                              'procesos/pro-bdt-006/pro-bdt-006',
                              'procesos/pro-bdt-006/f-pro-bdt-006a',
                            ]
                          },
                          'procesos/pro-bdt-007',
                          'procesos/pro-bdt-008',
                          'procesos/pro-bdt-009',
                          'procesos/pro-bdt-010',
                          'procesos/pro-bdt-011',
                          'procesos/pro-bdt-012',
                        ]
                },
                {
                  type: 'category',
                  label: 'Estándares',
                  items: [ 'estandares/est-bdt-001', 
                          'estandares/est-bdt-002',
                          'estandares/est-bdt-003',
                          'estandares/est-bdt-004',
                        ]
                },
                {
                  type: 'category',
                  label: 'Manuales',
                  items: [ 'manuales/man-bdt-001',
                          'manuales/man-bdt-002',
                          'manuales/man-bdt-003',
                         ]
                },
                {
                  type: 'category',
                  label: 'Plantillas',
                  items: [ 'plantillas/plt-bdt-001',
                          'plantillas/plt-bdt-002',
                          'plantillas/plt-bdt-003',
                          'plantillas/plt-bdt-004',
                          'plantillas/plt-bdt-005',
                  ]
                },
                {
                  type: 'category',
                  label: 'Guías',
                  items: [ 'guias/gui-bdt-001',
                           'guias/gui-bdt-002',
                           'guias/gui-bdt-003', 
                         ] 
                },
             ]
    },
    {
      type: 'category',
      label: 'SCAMPI',
      items: ['scampi/pp',
        'scampi/pi',
        'scampi/cm',
        'scampi/rd',
        'scampi/ver',
        'scampi/val',
        'scampi/opd',
        'scampi/reqm',
        'scampi/ot',
        'scampi/ppqa',
        'scampi/opf',
        'scampi/dar',
        'scampi/pmc',
        'scampi/ts',
        'scampi/rskm',
        'scampi/ipm',
        'scampi/ma',
      ]
    },
    {
      type: 'category',
      label: 'Zeitgeist',
      items: ['zeitgeist/Plan de Pruebas',
        'zeitgeist/imapactMappingZG',
        'zeitgeist/vision-proyecto-ZG',
      ]
    },
    {
      type: 'category',
      label: 'CR Organizacional',
      items: ['cr/cr-testplan',
        'cr/impact-mapping-cr',
        'cr/vision-proyecto-cr',
      ]
    },
    'FAQs',
  ],

};

export default sidebars;
