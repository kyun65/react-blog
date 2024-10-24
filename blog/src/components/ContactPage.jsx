import { Link } from "react-router-dom"; //react-router-domコンポーネントのリンク機能の呼び出し
import styles from '../index.module.css'
import { useState } from "react";



export const ContactPage = () => {

  const [contactData,setContactData] = useState(
    {name:'', email: '', message: ''}
  ); //空文字のオブジェクトを入れる。入力されたデータを管理


  // ステートの管理
  const [ error,setError ] = useState({}); //validateエラーメッセージを管理するためのステート
  const [ isSubmitting,setSubmit ] = useState(false); //フォームの入力データを管理するためのステート


  const changeEvent = (event) => {
    const { id, value } = event.target;
    setContactData((prevData) => ({ ...prevData, [id]: value }));
  } //フォームの入力が変更されたときに呼び出される


  const validate = () => {
    const valueErrors = {};
    if (!contactData.name) valueErrors.name = 'お名前は必須です。';
    if (!contactData.email) valueErrors.email = 'メールアドレスは必須です。';
    if (!contactData.message) valueErrors.message = '本文は必須です。';
    setError(valueErrors);
    return Object.keys(valueErrors).length === 0;
  } //フォームの入力データを検証(バリデーション)


  const submit = async(event) => {
    event.preventDefault();
    if (!validate()) return;
    setSubmit(true);
    try {
      const response = await fetch("https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/contacts", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contactData),
      });
      if (!response.ok) throw new Error('Network response was not ok');
      alert('送信しました');
      handleClear();
      setError({});
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setSubmit(false);
    }
  }

  const handleClear = () => {
    setContactData({name: '', email: '', message: ''});
  }

  return (
    <>
      <div className='App'>
        <header className={styles.header_app}>
          <Link to="/" className={styles.header_link}>Blog</Link>
          <Link to="/contact" className={styles.header_link}>お問い合わせ</Link>
        </header>
        <div className={styles.contact_form}>
          <h1 className={styles.contact_form_title}>問合わせフォーム</h1>
          <form className={styles.contact_form_wrap} onSubmit={submit}>
            <div className="formItem">
              <label>
                <dl>
                  <dt>お名前</dt>
                  <dd className="text">
                    <input type="text" id="name" maxLength="30" value={contactData.name} onChange={changeEvent} disabled={submit} />
                  </dd>
                  {error.name && <span>{error.name}</span>}
                </dl>
              </label>
              <div className="label">
                <label>
                  <dl>
                    <dt>メールアドレス</dt>
                    <dd className="text">
                    <input type="text" id="email" onChange={changeEvent} />
                    </dd>
                    {error.email && <span>{error.email}</span>}
                  </dl>
                </label>
              </div>
              <div className="label">
                <label>
                  <dl>
                    <dt>本文</dt>
                    <dd className="text">
                      <textarea type="text" id="message" maxLength="500" rows="10" value={contactData.message} onChange={changeEvent} disabled={submit} />
                    </dd>
                    {error.message && <span>{error.message}</span>}
                  </dl>
                </label>
              </div>
            </div>
            <div className="btn">
              <input type="submit" value="送信" disabled={isSubmitting} />
              <input type="reset" value="クリア" onClick={handleClear} disabled={isSubmitting} />
            </div>
          </form>
        </div>
      </div>
    </>
  )

}