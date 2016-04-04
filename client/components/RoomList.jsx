import React from 'react';

import RoomListItem from "../components/RoomListItem.jsx";

const RoomList = React.createClass({

  goToRoom(roomId, roomName) {
    this.props.goToRoom(roomId, roomName);
  },

  goToNewRoom() {
    this.props.setView("newRoom");
  },

  componentDidMount() {
    $('.ui.accordion').accordion();
  },

  render() {
    const { subsReady, otherRooms, subscribedRooms } = this.props;
    const loaderHTML =  (
      <div className="ui active inverted dimmer">
        <div className="ui text loader">
          Loading messages
        </div>
      </div>
    );

    const subscribedRoomsHTML = subscribedRooms.map(room => {
      return <RoomListItem key={room._id} goToRoom={this.goToRoom} chatterUser={this.props.chatterUser} goToNewRoom={this.goToNewRoom} room={room} />;
    });

    const otherRoomsHTML = otherRooms.map(room => {
      return <RoomListItem key={room._id} goToRoom={this.goToRoom} chatterUser={this.props.chatterUser} goToNewRoom={this.goToNewRoom} room={room} />;
    });

    return (
      <div className="wrapper">
        <div className="roomList">
          <div className="padded">
            <div className="ui accordion">
              <div className="title active">
                <div className="ui header">
                  <i className="dropdown icon"></i>
                  Subscribed channels <span>({subscribedRooms.length})</span>
                </div>
              </div>
              <div className="content active">
                <div className="ui selection middle aligned list celled">
                  { subsReady ? subscribedRoomsHTML : loaderHTML}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ui fluid button primary newroom-btn" onClick={this.goToNewRoom}>
          <i className="write icon"></i> New channel
        </div>
      </div>
    );
  }
});

export default RoomList;
