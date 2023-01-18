const form = document.querySelector('#form-habits')
const nwlSetup = new NLWSetup(form)

const data = {
  run: ['01-01', '01-02', '01-04']
}

nwlSetup.setData(data)
nwlSetup.load()