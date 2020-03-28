import React, { Component } from 'react'

export default class FormSanPham extends Component {
    render() {
        return (
            <div>
                <div>
                    {/* Button trigger modal */}
                    <button
                        type="button"
                        className="btn btn-primary btn-lg"
                        data-toggle="modal"
                        data-target="#modelId"
                    >
                        Launch
        </button>
                    {/* Modal */}
                    <div
                        className="modal fade"
                        id="modelId"
                        tabIndex={-1}
                        role="dialog"
                        aria-labelledby="modelTitleId"
                        aria-hidden="true"
                    >
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Modal title</h5>
                                    <button
                                        type="button"
                                        className="close"
                                        data-dismiss="modal"
                                        aria-label="Close"
                                    >
                                        <span aria-hidden="true">×</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <div>
                                        <div className="form-group">
                                            <label>Ma SP</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <label>Ten SP</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <label>San Pham</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button
                                        type="button"
                                        className="btn btn-secondary"
                                        data-dismiss="modal"
                                    >
                                        Close
                </button>
                                    <button type="button" className="btn btn-primary">
                                        Save
                </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
