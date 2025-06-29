import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import turboPlugin from 'eslint-plugin-turbo';
import tseslint from 'typescript-eslint';
import onlyWarn from 'eslint-plugin-only-warn';

/**
 * A shared ESLint configuration for the repository.
 *
 * @type {import("eslint").Linter.Config[]}
 * */
export const config = [
    js.configs.recommended,
    eslintConfigPrettier,
    ...tseslint.configs.recommended,
    {
        files: ['**/*.ts', '**/*.tsx'],
        languageOptions: {
            parser: tseslint.parser,
            parserOptions: {
                project: true,
            },
        },
    },
    {
        plugins: {
            turbo: turboPlugin,
        },
        rules: {
            'turbo/no-undeclared-env-vars': 'warn',
        },
    },
    {
        plugins: {
            onlyWarn,
        },
    },
    {
        ignores: ['dist/**'],
    },
    // 로코코 내부 컨벤션
    {
        rules: {
            // any 사용 제한
            '@typescript-eslint/no-explicit-any': 'error',

            // 네이밍 컨벤션
            '@typescript-eslint/naming-convention': [
                'error',
                // 변수명: 카멜케이스
                {
                    selector: 'variable',
                    format: ['camelCase'],
                    filter: {
                        regex: '^[A-Z][A-Z0-9_]*$',
                        match: false,
                    },
                },
                // boolean 변수: is 접두사
                {
                    selector: 'variable',
                    types: ['boolean'],
                    format: ['camelCase'],
                    prefix: ['is'],
                },
                // 상수: 대문자 스네이크케이스
                {
                    selector: 'variable',
                    modifiers: ['const'],
                    format: ['camelCase', 'UPPER_CASE'],
                },
                // 타입/인터페이스: 파스칼케이스
                {
                    selector: 'typeLike',
                    format: ['PascalCase'],
                },
            ],
        },
    },
];
