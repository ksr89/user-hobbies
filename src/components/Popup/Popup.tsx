import React, { Component } from 'react';

type PopupProps = {
  className: any,
  popupid: any,
  children: any,
  closePopup?: any,
  isSelected?: any,
}

class Popup extends Component<PopupProps> {
  button: any = "";
  isSelected: any = false;

  render() {
    const {
      className,
      children,
      isSelected,
      closePopup
    } = this.props;

    return (
      <div
        className={`popup-container ${className} ${isSelected() && 'popup-show'}`}
        role="dialog"
      >
        <div>

          <button
            ref={(button) => { this.button = button; }}
            type="button"
            title="Close"
            className="popup-close"
            onClick={() => { closePopup("-1"); }}
          >
            X
          </button>

          {children}

        </div>
      </div>
    );
  }
}

export default Popup;
