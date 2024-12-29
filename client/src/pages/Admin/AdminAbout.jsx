import React from 'react'
import { Form, Input } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { ShowLoading, HideLoading } from '../../redux/rootSlice'
import axios from 'axios'
import { message } from 'antd'

function AdminAbout() {
const dispatch =  useDispatch();
const {portfolioData} = useSelector((state) => state.root);

  const onFinish = async(values) => {
    try {
        const tempSkills = values.skills.split(",");
        values.skills = tempSkills;
        dispatch(ShowLoading())
        const response = await axios.post("http://localhost:5000/api/portfolio/update-about", {
          ...values,
          _id: portfolioData.about._id,
        });
        dispatch(HideLoading())
        if (response.data.success){
          message.success(response.data.message);
        }else{
          message.error(response.data.message);
        }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  return (
    <div>
      <Form onFinish={onFinish} layout='vertical' initialValues={{
        ...portfolioData.about,
        skills: portfolioData.about.skills.join(" , "),
      }}>
        <Form.Item name='dotlottieUrl' label='Dotlottie URL'>
          <Input placeholder="Dotlottie URL" />
        </Form.Item>
        <Form.Item name='descriprion1' label='Descriprion1'>
          <Input placeholder="Descriprion1" />
        </Form.Item>
        <Form.Item name='descriprion2' label='Descriprion2'>
          <Input placeholder="Descriprion2" />
        </Form.Item>
        <Form.Item name='descriprion3' label='Descriprion3'>
          <Input placeholder="Descriprion3" />
        </Form.Item>
        <Form.Item name='skills' label='Skills'>
          <Input placeholder="Skills" />
        </Form.Item>
        <div className='flex justify-end w-full'>
          <button className='px-10 py-2 bg-primary text-white' type='submit'>SAVE</button>
        </div>
      </Form>

    </div>
  )
}

export default AdminAbout;