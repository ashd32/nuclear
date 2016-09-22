import React from 'react';

class NowPlaying extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
        <div className="col-md-4 now-playing">
        <div className="panel panel-default">
        <div className="panel-heading">
          Now playing
        </div>
        <table className="table table-hover table-condensed">
        <thead>
        <tr>
        <th>#</th>
        <th>Title</th>
        <th>Length</th>
        </tr>
        </thead>

        <tbody>
        {this.props.queue.map(function(song, i){
          return (
              <tr>
              <td>{song.key}</td>
              <td>{song.title}</td>
              <td>{song.length}</td>
              </tr>
          );
        })}
      </tbody>

        </table>
        </div>
        </div>
    );
  }
}

export default NowPlaying;
