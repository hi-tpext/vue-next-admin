<?php

namespace vuenextadmin\common;

use tpext\think\App;
use tpext\think\View;
use tpext\common\Resource as baseResource;
use tpext\myadmin\common\Module as adminModule;

class Resource extends baseResource
{
    protected $version = '1.0.3';

    protected $name = 'vue.next.admin';

    protected $title = 'Vue-next-admin';

    protected $description = '基于[Vue-next-admin]对tpextmyadmin的UI替换';

    protected $root = __DIR__ . '/../';

    protected $assets = 'assets';

    public function loaded()
    {
        $indexView = $this->getRoot() . implode(DIRECTORY_SEPARATOR, ['admin', 'view', 'index', 'index.html']);
        $loginView = $this->getRoot() . implode(DIRECTORY_SEPARATOR, ['admin', 'view', 'index', 'login.html']);

        adminModule::getInstance()->addIndexView($indexView, 'vue-next-admin样式');
        adminModule::getInstance()->addLoginView($loginView, 'vue-next-admin样式');

        $adminConfig = adminModule::getInstance()->getConfig();

        $adminIndexView = $adminConfig['index_page_style'] ?? '';

        if ($adminIndexView == str_replace(App::getRootPath(), '__WWW__', $indexView)) { //本扩展提供的index主页样式正在被使用
            $admin_components_path = $this->getRoot() . implode(DIRECTORY_SEPARATOR, ['admin', 'view', 'components']);

            $config = $this->getConfig();

            View::share([
                'admin_aside' => $admin_components_path . DIRECTORY_SEPARATOR . 'aside.html',
                'admin_setting' => $admin_components_path . DIRECTORY_SEPARATOR . 'setting.html',
                'admin_header' => $admin_components_path . DIRECTORY_SEPARATOR . 'header.html',
                'admin_main' => $admin_components_path . DIRECTORY_SEPARATOR . 'main.html',
                'admin_columns_aside' => $admin_components_path . DIRECTORY_SEPARATOR . 'columns-aside.html',
                'admin_horizontal' => $admin_components_path . DIRECTORY_SEPARATOR . 'horizontal.html',
                'wartermark_text' => $config['wartermark_text'],
            ]);
        }
    }

    public function uninstall($runSql = true)
    {
        $indexView = $this->getRoot() . implode(DIRECTORY_SEPARATOR, ['admin', 'view', 'index', 'index.html']);
        $loginView = $this->getRoot() . implode(DIRECTORY_SEPARATOR, ['admin', 'view', 'index', 'login.html']);

        $adminConfig = adminModule::getInstance()->getConfig();

        $adminIndexView = $adminConfig['index_page_style'] ?? '';
        $adminLoginxView = $adminConfig['login_page_style'] ?? '';

        if (
            $adminIndexView == str_replace(App::getRootPath(), '__WWW__', $indexView)
            || $adminLoginxView == str_replace(App::getRootPath(), '__WWW__', $loginView)
        ) { //本扩展提供的index主页或登录样式正在被使用
            $this->errors[] = new \Exception('本扩展的index模板或login模板正被使用，请修改[后台框架]配置中修改模板为其他，后再卸载');
            return false;
        }

        return parent::uninstall($runSql);
    }
}
