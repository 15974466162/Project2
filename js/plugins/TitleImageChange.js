//=============================================================================
// TitleImageChange.js
// ----------------------------------------------------------------------------
// Copyright (c) 2015 Triacontane
// This software is released under the MIT License.
// http://opensource.org/licenses/mit-license.php
// ----------------------------------------------------------------------------
// Version
// 1.4.4 2018/07/11 1.4.3�������ǥ����ȥ뻭�椬�������������򜺤�����״�B�ǥ��`����˥����ȥ�ˑ�����ٱ�ʾ���Ƥ�������ӳ����ʤ����}������
// 1.4.3 2018/06/09 ���`�֥ե������������ޤ�󤭤����䤷�Ƥ�����Ϥ˥����ȥ뻭��α�ʾ���W���ʤ�F�������
// 1.4.2 2018/04/26 �˥�`���`���_ʼ�ᡢһ�Ȥ⥻�`�֤��Ƥ��ʤ��ǩ`�����M��״�r�Τߤ򥻩`�֤��륹����ץȤ�g�Ф��Ƥ��O������ӳ����ʤ����}������
// 1.4.1 2017/07/20 1.4.0��׷�Ӥ����C�ܤǻ����BGM��4�����Ϥ��ʤ��ȥ����ȥ뤬����Ƥ��ޤ����}������
// 1.4.0 2017/02/12 �����BGM��4������ָ���Ǥ���C�ܤ�׷��
// 1.3.1 2017/02/04 ���g�ʸ��ό���
// 1.3.0 2017/02/04 �ɤΥ��`�֥ǩ`�����M�жȤ��Ȥ����뤫��Q��뤿��΃��ȶȉ�����׷��
// 1.2.1 2016/12/17 �M��״�r�Τߥ��`�֤Υ�����ץȤ�g�Ф������Ϥˡ�����`�Х���󤬸��¤���Ƥ��ޤ����}������
// 1.2.0 2016/08/27 �M��״�r�ˏꤸ�ƥ����ȥ�BGM�����Ǥ���C�ܤ�׷��
// 1.1.0 2016/06/05 ���`�֥ǩ`���˚n�i����������Ϥ˥���`���k�����놖�}������
//                  �M��״�r�Τߤ򥻩`�֤���C�ܤ�׷��
// 1.0.0 2016/04/06 ����
// ----------------------------------------------------------------------------
// [Blog]   : http://triacontane.blogspot.jp/
// [Twitter]: https://twitter.com/triacontane/
// [GitHub] : https://github.com/triacontane/
//=============================================================================

/*:
 * @plugindesc �����ȥ뻭�����ץ饰����
 * @author �ȥꥢ���󥿥�
 *
 * @param �M�жȉ���
 * @desc ���`����M�жȤˌ��ꤹ���������(1...)
 * @default 1
 * @type variable
 *
 * @param ���ȶȉ���
 * @desc �}���Υ��`�֥ǩ`�������ڤ���Ȥ����ɤΥ��`�֥ǩ`�����M�жȤ��Ȥ��뤫��Q����������(1...)
 * @default 0
 * @type variable
 *
 * @param �����ȥ�1���M�ж�
 * @desc �M�жȉ����΂������΂����Ϥʤ饿���ȥ�1�λ��񤬱�ʾ����ޤ���
 * @default 1
 *
 * @param �����ȥ�1�λ���
 * @desc �M�жȉ����΂��������ȥ�1���M�ж����ϤΤȤ��˱�ʾ����뻭��(img/titles1)�Υե��������Ǥ���
 * @default
 * @require 1
 * @dir img/titles1/
 * @type file
 *
 * @param �����ȥ�1��BGM
 * @desc �M�жȉ����΂��������ȥ�1���M�ж����ϤΤȤ������व���BGM(audio/bgm)�Υե��������Ǥ���
 * @default
 * @require 1
 * @dir audio/bgm/
 * @type file
 *
 * @param �����ȥ�2���M�ж�
 * @desc �M�жȉ����΂������΂����Ϥʤ饿���ȥ�2�λ��񤬱�ʾ����ޤ���
 * @default 2
 *
 * @param �����ȥ�2�λ���
 * @desc �M�жȉ����΂��������ȥ�2���M�ж����ϤΤȤ��˱�ʾ����뻭��(img/titles1)�Υե��������Ǥ���
 * @default
 * @require 1
 * @dir img/titles1/
 * @type file
 *
 * @param �����ȥ�2��BGM
 * @desc �M�жȉ����΂��������ȥ�2���M�ж����ϤΤȤ������व���BGM(audio/bgm)�Υե��������Ǥ���
 * @default
 * @require 1
 * @dir audio/bgm/
 * @type file
 *
 * @param �����ȥ�3���M�ж�
 * @desc �M�жȉ����΂������΂����Ϥʤ饿���ȥ�3�λ��񤬱�ʾ����ޤ���
 * @default 3
 *
 * @param �����ȥ�3�λ���
 * @desc �M�жȉ����΂��������ȥ�3���M�ж����ϤΤȤ��˱�ʾ����뻭��(img/titles1)�Υե��������Ǥ���
 * @default
 * @require 1
 * @dir img/titles1/
 * @type file
 *
 * @param �����ȥ�3��BGM
 * @desc �M�жȉ����΂��������ȥ�3���M�ж����ϤΤȤ������व���BGM(audio/bgm)�Υե��������Ǥ���
 * @default
 * @require 1
 * @dir audio/bgm/
 * @type file
 *
 * @param �Խ����M�ж�
 * @desc �����ȥ��4�ѥ��`������ʹ���������Ϥϥ�������Ф���M�жȤ�ָ�����ޤ�����(4,5,6)
 * @default
 *
 * @param �Խ��λ���
 * @desc �����ȥ��4�ѥ��`������ʹ���������Ϥϥ�������Ф�ǻ���(img/titles1)�Υե���������ָ�����ޤ�����(aaa,bbb,ccc)
 * @default
 *
 * @param �Խ���BGM
 * @desc �����ȥ��4�ѥ��`������ʹ���������Ϥϥ�������Ф��BGM(audio/bgm)�Υե���������ָ�����ޤ�����(aaa,bbb,ccc)
 * @default
 *
 * @help ���`����M�жȤˏꤸ�ƥ����ȥ뻭��λ��񤪤��BGM�������ޤ���
 * �M�жȤˤ�����Ή�����ָ���Ǥ���ͨ����ȫ���`�֥ǩ`�����Ф���󂎤���ӳ����ޤ���
 *
 * �����������ȶȉ������e;ָ������Ƥ�����Ϥϡ����Ή����������󤭤�
 * ���`�֥ǩ`�����M�жȤ��Ȥ˻��񼰤�BGM���Q�ޤ�ޤ���
 *
 * �����ȥ뻭������3�Ĥޤ�ָ�����ܤǡ��}���������򜺤��������Ϥ�
 * ���¤Τ褦�ʃ����λ�ˤʤ�ޤ���
 *
 * 1. 4�Խ��λ��񼰤�BGM
 * 2. �����ȥ�3�λ��񤪤��BGM
 * 3. �����ȥ�2�λ��񤪤��BGM
 * 4. �����ȥ�1�λ��񤪤��BGM
 * 5. �ǥե���ȤΥ����ȥ뻭�񤪤��BGM
 *
 * ���`��ǩ`���򥻩`�֤����M��״�r�Τߤ򥻩`�֤��������Ϥϡ�
 * ���٥�ȥ��ޥ�ɤΡ�������ץȡ��������¤�g�Ф��Ƥ���������
 * DataManager.saveOnlyGradeVariable();
 *
 * ���Υץ饰����ˤϥץ饰���󥳥ޥ�ɤϤ���ޤ���
 *
 * ����Ҏ�s��
 *  ���ߤ˟o�ϤǸĉ䡢���䲼�����ܤǡ������ΑB�����á�18�����õȣ�
 *  �ˤĤ��Ƥ����ޤϤ���ޤ���
 *  ���Υץ饰����Ϥ⤦���ʤ��Τ�ΤǤ���
 */

(function() {
    'use strict';
    var pluginName = 'TitleImageChange';

    var getParamString = function(paramNames) {
        var value = getParamOther(paramNames);
        return value == null ? '' : value;
    };

    var getParamNumber = function(paramNames, min, max) {
        var value = getParamOther(paramNames);
        if (arguments.length < 2) min = -Infinity;
        if (arguments.length < 3) max = Infinity;
        return (parseInt(value, 10) || 0).clamp(min, max);
    };

    var getParamOther = function(paramNames) {
        if (!Array.isArray(paramNames)) paramNames = [paramNames];
        for (var i = 0; i < paramNames.length; i++) {
            var name = PluginManager.parameters(pluginName)[paramNames[i]];
            if (name) return name;
        }
        return null;
    };

    var getParamArrayString = function(paramNames) {
        var valuesText = getParamString(paramNames);
        if (!valuesText) return [];
        var values = valuesText.split(',');
        for (var i = 0; i < values.length; i++) {
            values[i] = values[i].trim();
        }
        return values;
    };

    var getParamArrayNumber = function(paramNames, min, max) {
        var values = getParamArrayString(paramNames);
        if (arguments.length < 2) min = -Infinity;
        if (arguments.length < 3) max = Infinity;
        for (var i = 0; i < values.length; i++) {
            if (!isNaN(parseInt(values[i], 10))) {
                values[i] = (parseInt(values[i], 10) || 0).clamp(min, max);
            } else {
                values.splice(i--, 1);
            }
        }
        return values;
    };

    //=============================================================================
    // �ѥ��`����ȡ�ä�����
    //=============================================================================
    var paramGradeVariable    = getParamNumber(['GradeVariable', '�M�жȉ���'], 1, 5000);
    var paramPriorityVariable = getParamNumber(['PriorityVariable', '���ȶȉ���'], 0, 5000);
    var paramTitleGrades      = [];
    paramTitleGrades.push(getParamNumber(['TitleGrade1', '�����ȥ�1���M�ж�']));
    paramTitleGrades.push(getParamNumber(['TitleGrade2', '�����ȥ�2���M�ж�']));
    paramTitleGrades.push(getParamNumber(['TitleGrade3', '�����ȥ�3���M�ж�']));
    var paramTitleImages = [];
    paramTitleImages.push(getParamString(['TitleImage1', '�����ȥ�1�λ���']));
    paramTitleImages.push(getParamString(['TitleImage2', '�����ȥ�2�λ���']));
    paramTitleImages.push(getParamString(['TitleImage3', '�����ȥ�3�λ���']));
    var paramTitleBgms = [];
    paramTitleBgms.push(getParamString(['TitleBgm1', '�����ȥ�1��BGM']));
    paramTitleBgms.push(getParamString(['TitleBgm2', '�����ȥ�2��BGM']));
    paramTitleBgms.push(getParamString(['TitleBgm3', '�����ȥ�3��BGM']));
    paramTitleGrades = paramTitleGrades.concat(getParamArrayNumber(['TitleGradeAfter', '�Խ����M�ж�'])).reverse();
    paramTitleImages = paramTitleImages.concat(getParamArrayString(['TitleImageAfter', '�Խ��λ���'])).reverse();
    paramTitleBgms   = paramTitleBgms.concat(getParamArrayString(['TitleBgmAfter', '�Խ���BGM'])).reverse();

    //=============================================================================
    // DataManager
    //  ���`���M��״�r�򱣴椷�ޤ���
    //=============================================================================
    var _DataManager_makeSavefileInfo = DataManager.makeSavefileInfo;
    DataManager.makeSavefileInfo      = function() {
        var info = _DataManager_makeSavefileInfo.apply(this, arguments);
        this.setGradeVariable(info);
        return info;
    };

    DataManager.getFirstPriorityGradeVariable = function() {
        this._loadGrade = true;
        var globalInfo    = this.loadGlobalInfo().filter(function(data, id) {
            return this.isThisGameFile(id);
        }, this);
        this._loadGrade = false;
        var gradeVariable = 0;
        if (globalInfo && globalInfo.length > 0) {
            var sortedGlobalInfo = globalInfo.clone().sort(this._compareOrderForGradeVariable);
            if (sortedGlobalInfo[0]) {
                gradeVariable = sortedGlobalInfo[0].gradeVariable || 0;
            }
        }
        return gradeVariable;
    };

    var _DataManager_loadGlobalInfo = DataManager.loadGlobalInfo;
    DataManager.loadGlobalInfo = function() {
        if (this._loadGrade) {
            if (!this._globalInfo) {
                try {
                    var json = StorageManager.load(0);
                    this._globalInfo = json ? JSON.parse(json) : [];
                } catch (e) {
                    console.error(e);
                    this._globalInfo = [];
                }
            }
            return this._globalInfo;
        } else {
            return _DataManager_loadGlobalInfo.apply(this, arguments);
        }
    };

    DataManager._compareOrderForGradeVariable = function(a, b) {
        if (!a) {
            return 1;
        } else if (!b) {
            return -1;
        } else if (a.priorityVariable !== b.priorityVariable && paramPriorityVariable > 0) {
            return (b.priorityVariable || 0) - (a.priorityVariable || 0);
        } else {
            return (b.gradeVariable || 0) - (a.gradeVariable || 0);
        }
    };

    DataManager.saveOnlyGradeVariable = function() {
        var saveFileId = this.lastAccessedSavefileId();
        var globalInfo = this.loadGlobalInfo() || [];
        if (globalInfo[saveFileId]) {
            this.setGradeVariable(globalInfo[saveFileId]);
        } else {
            globalInfo[saveFileId] = this.makeSavefileInfo();
        }
        this.saveGlobalInfo(globalInfo);
    };

    DataManager.setGradeVariable = function(info) {
        info.gradeVariable = $gameVariables.value(paramGradeVariable);
        if (paramPriorityVariable > 0) {
            info.priorityVariable = $gameVariables.value(paramPriorityVariable);
        }
    };

    var _DataManager_saveGlobalInfo = DataManager.saveGlobalInfo;
    DataManager.saveGlobalInfo = function(info) {
        _DataManager_saveGlobalInfo.apply(this, arguments);
        this._globalInfo = null;
    };

    //=============================================================================
    // Scene_Title
    //  �M��״�r��һ�����ϤΈ��ϡ������ȥ뻭����椨�ޤ���
    //=============================================================================
    var _Scene_Title_initialize      = Scene_Title.prototype.initialize;
    Scene_Title.prototype.initialize = function() {
        _Scene_Title_initialize.apply(this, arguments);
        this.changeTitleImage();
        this.changeTitleBgm();
    };

    Scene_Title.prototype.changeTitleImage = function() {
        var gradeVariable = DataManager.getFirstPriorityGradeVariable();
        for (var i = 0, n = paramTitleGrades.length; i < n; i++) {
            if (paramTitleImages[i] && gradeVariable >= paramTitleGrades[i]) {
                $dataSystem.title1Name = paramTitleImages[i];
                break;
            }
        }
    };

    Scene_Title.prototype.changeTitleBgm = function() {
        var gradeVariable = DataManager.getFirstPriorityGradeVariable();
        for (var i = 0, n = paramTitleGrades.length; i < n; i++) {
            if (paramTitleBgms[i] && gradeVariable >= paramTitleGrades[i]) {
                $dataSystem.titleBgm.name = paramTitleBgms[i];
                break;
            }
        }
    };
})();