import React from 'react';
import { Tab } from 'semantic-ui-react';

const panes = [
  {
    menuItem: 'Mon Profil',
    render: () => <Tab.Pane>
      <p>Nom: </p>
      <p>Prenom: </p>
      <p>email: </p>
    </Tab.Pane>,
  },
  { menuItem: 'Mes animaux', render: () => <Tab.Pane>
    <div>
      <h1>Animal 1</h1>
      <p>Nom: </p>
      <p>Type: </p>
      <p>Race: </p>
      <p>Description: </p>
      <button type="button">Voir la fiche</button>
    </div>
  </Tab.Pane> },
];

const TableMenu = ({actualUser}) => <Tab panes={panes} />;

export default TableMenu;
