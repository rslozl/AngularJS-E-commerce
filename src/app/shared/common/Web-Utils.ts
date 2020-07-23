export default class WebUtils {

  public static URL = 'http://localhost:8090/api/';

  public static USER_REGISTER = WebUtils.URL + 'user/register';
  public static USER_LOGIN = WebUtils.URL + 'user/login';
  public static UPDATE_USER = WebUtils.URL + 'user/update';
  public static USER_LIST = WebUtils.URL + 'user/getAllUser';

  public static ALL_PRODUCT = WebUtils.URL + 'product/getAllProduct';
  public static ONE_PRODUCT = WebUtils.URL + 'product/getOneProduct/';
  public static LAST_TEN_PRODUCT = WebUtils.URL + 'product/findTop10ByOrderByIdAsc/';


}
