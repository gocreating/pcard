import React from 'react';

export default class Datetime extends React.Component {
  getValue() {
    return {
      year: this.refs.year.value,
      month: this.refs.month.value,
      day: this.refs.day.value,
      hour: this.refs.hour.value,
      minute: this.refs.minute.value,
      second: this.refs.second.value,
    };
  }

  render() {
    return (
      <div>
        <div className="form-group">
          <label className="col-sm-2 control-label">
            {this.props.label}
          </label>
          <div className="col-sm-4">
            <div className="input-group">
              <input
                type="number"
                ref="year"
                defaultValue={this.props.value.year}
                className="form-control" />
              <span className="input-group-addon">
                年
              </span>
              <input
                type="number"
                ref="month"
                defaultValue={this.props.value.month}
                className="form-control" />
              <span className="input-group-addon">
                月
              </span>
              <input
                type="number"
                ref="day"
                defaultValue={this.props.value.day}
                className="form-control" />
              <span className="input-group-addon">
                日
              </span>
            </div>
          </div>

        </div>

        <div className="form-group">
          <label className="col-sm-2 control-label">
          </label>
          <div className="col-sm-4">
            <div className="input-group">
              <input
                type="number"
                ref="hour"
                defaultValue={this.props.value.hour}
                className="form-control" />
              <span className="input-group-addon">
                時
              </span>
              <input
                type="number"
                ref="minute"
                defaultValue={this.props.value.minute}
                className="form-control" />
              <span className="input-group-addon">
                分
              </span>
              <input
                type="number"
                ref="second"
                defaultValue={this.props.value.second}
                className="form-control" />
              <span className="input-group-addon">
                秒
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
};