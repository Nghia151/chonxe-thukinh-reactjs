import React, { Component } from 'react'

export default class Specification extends Component {
    render() {
        const {carSelected} = this.props;
        return (
            <div>
                <div className="card mt-2">
                    <div className="card-header text-primary text-left">
                        <h3>See more LX features</h3>
                    </div>
                    <div className="p-3">
                        <table className="table table-bordered text-left">
                            <tbody>
                                <tr>
                                    <td>Color</td>
                                    <td>{carSelected.color}</td>
                                </tr>
                                <tr>
                                    <td>Price</td>
                                    <td>{carSelected.price}$</td>
                                </tr>
                                <tr>
                                    <td>Engine type</td>
                                    <td>{carSelected.engineType}</td>
                                </tr>
                                <tr>
                                    <td>Displacement</td>
                                    <td>{carSelected.displacement}</td>
                                </tr>
                                <tr>
                                    <td>Horsepower (SAE net)</td>
                                    <td>{carSelected.horsepower}</td>
                                </tr>
                                <tr>
                                    <td>Torque (SAE net)</td>
                                    <td>{carSelected.torque}</td>
                                </tr>
                                <tr>
                                    <td>Redline</td>
                                    <td>{carSelected.redline}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
