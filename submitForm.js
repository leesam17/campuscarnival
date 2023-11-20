

const mailgun = new Mailgun(formData);
const mg = mailgun.client({
  username: 'campuscarnival',
  key: ''<e19e8b0960505185fef7b53486f723b8-5d2b1caa-1a02665b>'',
});

exports.handler = async function (event, context) {

  const formDataFromUser = JSON.parse(event.body);


  const emailSubject = `Campus Carnival Feedback from ${formDataFromUser.age} ${formDataFromUser.status}`;
  const emailText = `
    Age: ${formDataFromUser.age}
    Status: ${formDataFromUser.status}
    Ladokite: ${formDataFromUser.ladokite}
    Spending: ${formDataFromUser.spending}
    Feedback: ${formDataFromUser.feedback}
  `;

  try {
    const msg = await mg.messages.create('sandboxbc61a1dfc839404088b2f6bf29d58f0c.mailgun.org', {
      from: "Mailgun Sandbox <postmaster@sandboxbc61a1dfc839404088b2f6bf29d58f0c.mailgun.org>",
      to: ["carnivalcampus@gmail.com"],
      subject: emailSubject,
      text: emailText,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully' }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Error sending email' }),
    };
  }
};
