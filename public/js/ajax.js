/* global $, Q */

var ajax = {
  post: function (url, param) {
    return this.exec('post', url, param)
  },

  get: function (url, param) {
    return this.exec('get', url, param)
  },

  exec: function (type, url, params) {
    var d = Q.defer()
    var settings = {
      type: type,
      data: JSON.stringify(params),
      dataType: 'json',
      contentType: 'application/json',
      error: function (jqXHR, status) {
        if (jqXHR.status === 401) {
          window.location.href = '/'
        }
        d.reject(jqXHR.responseText + ' - ' + jqXHR.statusText)
      },
      success: function (response, status) {
        d.resolve(response)
      }
    }
    $.ajax(url, settings)
    return d.promise
  }
}
