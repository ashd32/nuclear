import React from 'react';
import FontAwesome from 'react-fontawesome';
import _ from 'lodash';

import InputDialog from '../../InputDialog';
import Spacer from '../../Spacer';

import styles from './styles.scss';
import globalStyles from '../../../app.global.scss';
import settingsConst from '../../../constants/settings';

class QueueMenu extends React.Component {
  constructor(props){
    super(props);
  }

  handleAddPlaylist(addPlaylist, notify, items) {
    return name => {
      addPlaylist(items, name);
      notify(
        'Playlist created',
        `Playlist ${name} has been created.`
      );
    };
  }

  render() {
    let {
      addPlaylist,
      clearQueue,
      notify,
      items,
      toggleOption,
      settings
    } = this.props;

    return (
      <div className={styles.queue_menu_container}>
        <div className={styles.queue_menu_buttons}>
          <a href='#' className='compactButton' onClick={() => toggleOption(_.find(settingsConst, ['name', 'compactQueueBar']), settings)}>
            <FontAwesome name={settings.compactQueueBar ? 'angle-left' : 'angle-right'} />
          </a>
          <a href='#' onClick={clearQueue}><FontAwesome name='trash-o' /></a>

          <InputDialog
            header={<h4>Input playlist name:</h4>}
            placeholder='Playlist name...'
            accept='Save'
            onAccept={this.handleAddPlaylist(addPlaylist, notify, items)}
            trigger={
              <a href='#'><FontAwesome name='save' /></a>
            }
          />
          <a className={globalStyles.disabled} href='#'><FontAwesome name='random' /></a>
        </div>
        <hr />
      </div>
    );
  }
}

export default QueueMenu;
