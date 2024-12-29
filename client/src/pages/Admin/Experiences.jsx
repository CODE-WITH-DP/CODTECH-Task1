import React, { useState } from 'react';
import { Modal, Form } from 'antd';
import { useSelector } from 'react-redux';

function Experiences() {
  const { experiences } = useSelector((state) => state.root.portfolioData);
  const [showAddEditModal, setShowAddEditModal] = useState(false);
  const [selectedItemForEdit, setSelectedItemForEdit] = useState(null);

  return (
    <div>
      <div className="flex justify-end">
        <button
          className="bg-primary text-white px-5 py-2"
          onClick={() => setShowAddEditModal(true)}
        >
          Add Experience
        </button>
      </div>

      <div className="grid grid-cols-4 gap-5">
        {experiences.map((experience, index) => {
          return (
            <div
              key={index}
              className="shadow border p-5 border-gray-400 flex flex-col"
            >
              <h1 className="text-primary text-xl font-bold">
                {experience.period}
              </h1>
              <hr />
              <h1>Company : {experience.company}</h1>
              <h1>Role : {experience.title}</h1>
              <h1>{experience.description}</h1>
              <div className="flex justify-end gap-5 mt-5">
                <button
                  className="bg-primary text-white px-5 py-2"
                  onClick={() => {
                    setSelectedItemForEdit(experience);
                    setShowAddEditModal(true);
                  }}
                >
                  Edit
                </button>
                <button className="bg-red-500 text-white px-5 py-2">
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <Modal
        visible={showAddEditModal}
        title={selectedItemForEdit ? "Edit Experience" : "Add Experience"}
        footer={null}
        onCancel={() => setShowAddEditModal(false)}
      >
        <Form layout="vertical" initialValues={selectedItemForEdit}>
          <Form.Item name="period" label="Period">
            <input placeholder="Period" />
          </Form.Item>
          <Form.Item name="company" label="Company">
            <input placeholder="Company" />
          </Form.Item>
          <Form.Item name="title" label="Title">
            <input placeholder="Title" />
          </Form.Item>
          <Form.Item name="description" label="Description">
            <input placeholder="Description" />
          </Form.Item>
        </Form>

        <div className="flex justify-end">
            <button
              className="border-primary text-primary px-5 py-2"
              onClick={() => {
                setShowAddEditModal(false);
              }}
            >
              Cancle
            </button>
            <button className="bg-primary text-white px-5 py-2">
              {selectedItemForEdit ? "Update" : "Add"}
            </button>
          </div>

      </Modal>
    </div>
  );
}

export default Experiences;